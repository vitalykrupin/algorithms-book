## Соседи

Дана матрица. Нужно написать функцию, которая для элемента возвращает всех его соседей.
Соседним считается элемент, находящийся от текущего на одну ячейку влево, вправо, вверх или вниз.
Диагональные элементы соседними не считаются.

#### Input
Дан объект, где:
`matrix` - матрица в формате `Array<number[]>`. Элементы матрицы — целые числа, по модулю не превосходящие 1000.
`el` - координаты элемента `[rowId, colId]`, соседей которого нужно найти. Индексация начинается с нуля.

#### Output
Массив нужных чисел отсортированный по возрастанию.