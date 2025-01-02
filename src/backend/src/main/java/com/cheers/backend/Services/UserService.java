package com.cheers.backend.Services;

import com.cheers.backend.Models.User;
import com.cheers.backend.Repositories.UserRepository;
import com.cheers.backend.utils.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;

import static com.cheers.backend.utils.PasswordValidator.validatePassword;

@Service
public class UserService {

    private static final String EMAIL_REGEX = "^[A-Za-z0-9+_.-]+@(.+)$";
    private static final Pattern EMAIL_PATTERN = Pattern.compile(EMAIL_REGEX);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    private boolean isEmailValid(String email) {
        return EMAIL_PATTERN.matcher(email).matches();
    }

    public List<User> getAllUser(){
        return userRepository.findAll();
    }

    public User getUserByEmail(String email){
        return userRepository.findByEmail(email);
    }

    public String createUser(User user){
        boolean emailValid = isEmailValid(user.getEmail());
        if(!emailValid){
            return "Email Inválido";
        }

        boolean passwordValid = validatePassword(user.getPassword());
        if(!passwordValid){
            return "Senha Inválida";
        }

        Optional<User> userOptional = Optional.ofNullable(userRepository.findByEmail(user.getEmail()));
        if(userOptional.isPresent()){
            return "Já existe um usuário com esse email";
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return "Usuário criado com sucesso!";

    }

    public String updateUser(Long id, User updatedUser){
        boolean emailValid = isEmailValid(updatedUser.getEmail());
        if(!emailValid){
            return "Email inválido!";
        }

        Optional<User> optionalUser = userRepository.findById(id);
        if(optionalUser.isPresent()){
            User existingUser = userRepository.findByEmail(updatedUser.getEmail());
            if(existingUser != null && !existingUser.getId().equals(id)){
                return "Email já está em uso";
            }

            if(updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()){
                updatedUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
            }else{
                updatedUser.setPassword(optionalUser.get().getPassword());

            }

            updatedUser.setId(id);
            userRepository.save(updatedUser);
            return "Usuário atualizado com sucesso!";

        }

        return "Usuário não encontrado!";

    }

    public String deleteUser(Long id){
        Optional<User> optionalUser = userRepository.findById(id);
        if(optionalUser.isPresent()){
            userRepository.delete(optionalUser.get());
            return "Usuário deletado com sucesso!";
        }

        return "Usuário não encontrado";
    }

    public String loginUser(String email, String rawPassword){
        User user = userRepository.findByEmail(email);

        if(user == null){
            return "Usuário não encontrado!";
        }

        if(!passwordEncoder.matches(rawPassword, user.getPassword())){
            return "Senha incorreta";
        }

        String token = JwtUtil.generateToken(user.getEmail());
        return "Login realizado com sucesso! Token: " + token;
    }

}
