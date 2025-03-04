<?php

function getDaysInCurrentMonth() {
    return date('t');
}
echo "Дней в текущем месяце: " . getDaysInCurrentMonth() . "\n"; 