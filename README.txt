1) создали структуру проекта
2) http://getbootstrap.com/  загрузили bootstrap - Compiled and minified CSS, JavaScript, and fonts.  https://github.com/twbs/bootstrap/releases/download/v3.3.6/bootstrap-3.3.6-dist.zip ИЛИ только то, что нужно именно вашему проекту http://getbootstrap.com/customize/

СКОПИРОВАЛИ В КАТАЛОГ ПРОЕКТА  (все скопировалось в соответствующие папки)

3) Создали index.html - СОБСТВЕННЫЙ ИЛИ на основе одного из проектов  http://getbootstrap.com/getting-started/#examples   --- Examples can be found in the docs/examples/ directory in the file https://github.com/twbs/bootstrap/archive/v3.3.6.zip.

4) С  учетом расположения файлов подправьте index.html, и поместите необходимые для проекта css и js и favicon.ico в соответствующие каталоги

Просмотрите страницу в браузере

5) Например, добавим с свой проект scss - bg для body

установлен ruby, sass, 

в консоле перейдем в каталог проекта c:\_olga\_sites\pr-bootstrap.local\
выполним команду sass --watch scss:css 

добавим файл bg.jpg в каталог с картинками и строки в файл scss/base/base.scss
body{
  background-image: url("../images/bg.jpg");
}
после сохранения файла содержимое css/style.css изменилось
Ctrl+C - останавливает наблюдение.