package com.cheers.backend.utils;

import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {
        final String authorizationHeader = request.getHeader("Authorization");

        String email = null;
        String jwtToken = null;

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            jwtToken = authorizationHeader.substring(7);
            try{
                email = jwtUtil.extractEmail(jwtToken);
            }catch (ExpiredJwtException e){
                System.out.println("Token Expirado");
            }catch (Exception e){
                System.out.println("Erro ao processar o token!");
            }
        }

        if(email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            if(jwtUtil.validateToken(jwtToken, email)) {
                SecurityContextHolder.getContext().setAuthentication((Authentication) new WebAuthenticationDetailsSource().buildDetails(request));
            }
        }

        chain.doFilter(request, response);
    }


}
