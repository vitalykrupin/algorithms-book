## Дек

Напишите эффективную реализацию Deck, где все операции выполняются за O(1).

#### Input

Первый аргумент `max` -- число, максимальный размер дека. Он не превосходит 50000.
Второй аргумент массив комманд:

 - push_back(value) – добавить элемент в конец дека. Если в деке уже находится максимальное число элементов, вывести «error».
 - push_front(value) – добавить элемент в начало дека. Если в деке уже находится максимальное число элементов, вывести «error».
 - pop_front() – вывести первый элемент дека и удалить его. Если дек был пуст, то вывести «error».
 - pop_back() – вывести последний элемент дека и удалить его. Если дек был пуст, то вывести «error».

Value — целое число, по модулю не превосходящее 1000.

#### Output

Выведите результат в виде массива всех результатов команд.
Для успешных запросов push_back(x) и push_front(x) ничего выводить не надо.