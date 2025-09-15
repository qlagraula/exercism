<?php

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {
        $name = trim($name);
        return $name[0];
    }

    public function initial(string $name): string
    {
        $first_letter = $this->firstLetter($name);
        return strtoupper($first_letter) . ".";
    }

    public function initials(string $name): string
    {
        $names = explode(" ", trim($name));
        $first_letter = $this->initial($names[0]);
        $second_letter = $this->initial($names[1]);

        return "$first_letter $second_letter";
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        $initials_a = $this->initials($sweetheart_a);
        $initials_b = $this->initials($sweetheart_b);

        return "
        ******       ******
      **      **   **      **
    **         ** **         **
   **            *            **
   **                         **
   **    $initials_a + $initials_b     **
   **                       **
     **                   **
       **               **
         **           **
           **       **
             **   **
               ***
                *";
    }
}
