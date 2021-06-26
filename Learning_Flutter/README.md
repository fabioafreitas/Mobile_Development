# Flutter
Aprendendo flutter

Construtores podem ser escritos da seguinte forma:
```
class Person {
	String name;
	int age;

	//Argumentos dentro de chaves não são obrigatórios e podem ser chamados fora de ordem
	//ex: Person(age: 10, name: "fabio").
	//É possível indicar valores default para as variáveis, no caso de alguns argumentos não serem chamados
	Person({this.name = "joão", this.age = 15});

	//É possível ter diversos construtores
	Person.teste1({{this.name = "teste1", this.age = 10}});
	Person.teste2({{this.name = "teste2", this.age = 20}});

}
```


Funções mais simples podem ser chamadas por meio de **arrow function**
```
void main() {
	runApp(MyApp());
}

//pode ser escrito como

void main() => runApp(MyApp());
```


O controle de visibilidade das classes ocorre da seguinte forma:
```
class Teste {} // classe pública, pode ser utilizada por entidades fora do arquivo que a contem

class _Teste {} // classe privada, não pode ser utilizada por entidades fora do arquivo que a contem
```

Operador de espalhamento. O **...** espalha os elementos de uma lista individualmente. Pode ser utilizado para acrescentes listas de Widgets sem a necessidade de laços
```
...['a','b','c']
```
