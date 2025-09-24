<?php

class LuckyNumbers
{
    public function sumUp(array $digitsOfNumber1, array $digitsOfNumber2): int
    {
        return (int) $digitsOfNumber1 + (int) $digitsOfNumber2;
    }

    public function isPalindrome(int $number): bool
    {
        $str = (string) $number;
        return $str === strrev($str);
    }

    public function validate(string $input): string
    {
        $input = trim($input);

        if (empty($input) && $input !== "0") {
            return "Required field";
        }

        $int = (int) $input;
        if ($int < 1) {
            return "Must be a whole number larger than 0";
        }

        return "";
    }
}
