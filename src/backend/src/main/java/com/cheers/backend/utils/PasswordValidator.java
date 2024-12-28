package com.cheers.backend.utils;

import java.util.regex.Pattern;

public class PasswordValidator {
    private static final String PASSWORD_REGEX = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*\\W)(?=.{8,}).*$";
    private static final Pattern PASSWORD_PATTERN = Pattern.compile(PASSWORD_REGEX);

    public static boolean validatePassword(String password) {
        return PASSWORD_PATTERN.matcher(password).matches();
    }


    public static boolean hasUppercase(String password){
        return password.matches("[A-Z]+");
    }

    public static boolean hasLowercase(String password){
        return password.matches("[a-z]+");
    }

    public static boolean hasSpecialChar(String password){
        return password.matches("[\\w]+");
    }

    public static boolean hasNumber(String password){
        return password.matches("[0-9]+");
    }
}
