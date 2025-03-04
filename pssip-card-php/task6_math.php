<?php

function customMathFunction($x) {
    try {
        if (!is_numeric($x)) {
            throw new Exception("Входное значение должно быть числом");
        }

        if ($x >= 2) {
            $result = sqrt(pow($x, 2) + 6 * $x);
        } elseif ($x >= 0 && $x < 2) {
            if ($x == 0) {
                throw new Exception("Невозможно вычислить sqrt(0)");
            }
            $result = (2 * $x - 1) / (sqrt($x) + 2);
        } else {
            $result = 0.5 * $x;
        }

        if (is_nan($result) || is_infinite($result)) {
            throw new Exception("Результат вычисления недопустим");
        }

        return $result;
    } catch (Exception $e) {
        throw $e;
    }
} 