<?php

class PizzaPi
{
    public function calculateDoughRequirement(int $pizzas, int $persons): int
    {
        return $pizzas * ($persons * 20 + 200);
    }

    public function calculateSauceRequirement(
        int $pizzas,
        int $sauce_per_can,
    ): int {
        $sauce_per_pizza = 125;
        return ($pizzas * $sauce_per_pizza) / $sauce_per_can;
    }

    public function calculateCheeseCubeCoverage(
        int $cheese_dimension,
        int $thickness,
        int $diameter,
    ): int {
        return floor($cheese_dimension ** 3 / ($thickness * M_PI * $diameter));
    }

    public function calculateLeftOverSlices(
        int $number_of_pizza,
        int $number_of_friends,
    ): int {
        return ($number_of_pizza * 8) % $number_of_friends;
    }
}
