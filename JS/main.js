/*
    __CARACTERISTICAS DE JS:__
    * Dinamicamente tipado - datos no tipados-
    * Interpretado         - No necesita ser compilado, el navegador lo interpreta
    * Prototipado          -
    * Multiparadigma       - Programar: orientado a objetos, reactivo, funcional, etc.

    __ VARIBLES-CONTANTES __
    VAR: container for data with variations (save in memory)
    CONST: container for data that not change
    Types: const, var, let

    __ Difference between LET and VAR
    LET: Declare variables for block scope (for,if,while,etc)
    VAR: Declare variables for global scope or function scope

    __ SYNTAX __
    -COMENTS: // or multiline
    -DAT AND COMA: it's optional
    *EXPRESION: Is a code part that return a value
    -WHITE SPACES: Are ignored
    -CASE SENSITIVE: should use camellCase

    __ DATA TYPES __
    PRIMITIVES:
     -NUMBERS
     -STRINGS
       * ''
       * ""
       * `` <- preferably
     -BOOLEAN
       *true
       *false
     -UNDEFINED: When you don't assign value to something
     -NULL: When something doesn't exist
     -SYMBOL():
    COMPOSED:
     -ARRAY     |
     -OBJECTS   |_ Are composed because have several data in them
     -FUNCTIONS |

    __ REAL DATA TYPES __
    PRIMITIVES
     - NULL
     - UNDEFINED
     - NUMBER
     - STRING
     - BOOLEAN
     - SYMBOL
    OBJECT

    __ TYPE COERTION __
    Es la manera en que javascript sabe que tipo de dato es, e intenta
    convertirlo si es necesario

    __ VALUE OR REFERENCE __
    PRIMITIVES: For VALUE   (NO SE MODIFICA)
      *let nombre1 = "juan"
      *let nombre2  = nombre1
      *nombre2 = "pedro"
       -nombre1 = "juan"
       -nombre2 = "pedro"
    COMPOSED: For REFERENCE  (SE MODIFICA)
      *let numbers1 = [1,2,3]
      *let numbers2 = numbers1
       -numbers2.push(4)
       -numbers1 = [1,2,3,4]
       -numbers2 = [1,2,3,4]

    __ OPERATORS __
    ASSIGNATION:
        EQUAL    : =
        ADD      : +=
        SUBSTRACT: -=
        DIVIDE   : /=
        MULTIPLY : *=
    COMPARATION:
        COMPARE VALUES:                         ==
        COMPARE VALUES INVERTED:                !=
        COMPARE VALUES AND DATA TYPE:           === (PREFERABLY)
        COMPARE VALUES INVERTED AND DATA TYPE:  !==

    __ UNARY OPERATORS __
    Needed one data
     * !1           (ONLY WITH BOOLEAN)
     * 1 typeof

    __ BINARY OPERATORS __
    Need two data
     * 1 + 1
     * 2 * 6

    __ OPERATORS __
    -
    *
    /
    %
    ++
     * ++number (PRE INCREMENT)
     * number++ (POST INCREMENT)
    --
     * --number (PRE DECREMENT)
     * number-- (POST DECREMENT)

    __ TERNARY OPERATOR __
    expression ? true : false
     * age > 20 ? 'You are a man' : 'You are a kid'

    __ CORTO CIRCUITO OPERATOR __
    * ||
        let a
        let b = a || 'Juan'
    * &&
        Es al revez que el primero

    __ NUMBERS __
    toFixed(n)              = Especifica el numero de decimales (Y redondea)
    parseInt(string,10)     = Convertir un texto a un numero
    parseFloat()            =           ||                   con decimales
    NaN                     = Cualquier operacion que no devuelva un numero

    __ MATH __
    math.floor()    = redondea hacia abajo
    math.ceil()     = redondea hacia arriba
    math.round()    = redondea hacia dependiendo del valor
    math.random()   = Genera un numero random de 0 a 1

    __ STRING __
    Are text
    PROPERTIES:
        *.lenght
    METHODS:
        *WITHOUT PARAMETERS
            -.trim()
            -.toUpperCase()
            -.toLowerCase()
        *FIND CHARACTERS
            -indexOf('r') OR SPECIFIC PLACE -indexOf('r',2)
                *-1 if don't find the string
            -lastIndexOf('r')
                * Count but from the last item
            -includes('blog')
                >'https://ed.team/blog'.includes('blog')
                    *true
            -startsWith('https://ed.team')
                >'https://ed.team/blog'.startsWith('https://ed.team')
                    *true
            -endsWith('https://ed.team')

    __ TRANSFORM STRINGS __
    REPLACE: replace a text with one new
        >'Hola texto'.replace('texto','nuevo')
            *"Hola nuevo"

    SPLIT: separe text with a selected element
        >'Alexys'.split('e')
            *["Al","xys"]  <== Used the "e" like separator
        >'Hola Mundo'.split(' ')
            *["Hola","Mundo"]
        >'Alexys'.split('')
            *["A","l","e","x","y","s"]

    SUBSTRING: Extract text from the specific position
                substring(start,[end]) ==> end is optional
                *NO include end     *If end is negative, extract to back
        >'Hola mundo'.substring(4)
            *" mundo"
        >'Hola mundo'.substring(2,5)
            *"la "
        >'Hola mundo'.substring(2,-1) Negative value
            *"Ho"
    SUBSTR: Extract text from the specific position with a quantity
            *If end is negative, extract from back
        >'Hola mundo'.substr(2,5)
            *"la mu"
        >'Hola mundo'.substr(-2)
            *"do"

    SLICE:
        >'Hola mundo'.slice(-5,-2)
            *"mun"
        >'Hola mundo'.slice(1,-1)
            *"ola mund"



    __ CONDITIONALS AND LOOPS __
    IF:
        EXTRUCTURES:
            -one line
                > if(condition) console.log("true");
            -With block
                > if(condition) {
                    //Do something
                }
            -with more conditions
                > if(condition1){
                    //Do something
                }else if(condition2){
                    //Do something
                }else{
                    //Do something
                }

    MULTIPLE CONDITIONALS:
        - && (AND)
        - || (OR)

    NESTING(anidadas) CONDITIONALS:
        > if( 1 > 0){
            console.log("First conditional");
            if(2 > 1){
                console.log("Second conditional");
            }
        }

    TRUTHY AND FALSY VALUES:
        values with a boolean behavior
        -FALSY:
            * 0
            * ""
            * NaN
            * undefined
            * null
        -TRUTHY:
            * string no void
            * Number different of zero
            * Arrays
            * Objects

    SWITCH:
        let value = "a"
        switch(value){
            case "a":
                alert("correct")
            break
            case "b":
                alert("select the first option")
            break
            default:
                alert("select any option")
            break
        }

    __ LOOPS __
        -FOR
            >for(let i = 0; i < 10; i++){
                console.log(i);
            }

        -BREAK AND JUMP A FOR
            > for(let i = 0; i <= 5; i++){
                if(i % 2 === 0 ) continue
                //IS LIKE A JUMP, THIS DON'T DO NOTHING
                console.log(i);
            }
                * 1 3 4 5

            > for(let i = 0; i <= 5; i++){
                if(i > 3) break
                // OUT OF THE LOOP
                console.log(i);
            }
                * 1 2 3

        -WHILE
            while(condition){
               // Do something
            }

            > let i = 0
              while(i < 10){
                  console.log(i);
                  i++
              }

            > let i = 0
              while(i--){
                  console.log(i);
              }

        -DO WHILE
            do{
                // Do something
            } while (condition)

            > let i = 0
              do {
                  console.log(i);
              } while( i > 0 )

            > let password = 'EDteam'
              let pass
              do {
                  pass = prompt('Ingrese la contraseña')
              } while(pass !== password)

    __ FUNCTIONS __
    If a function is in a OBJECT his name is METHOD

    - WAYS OF DECLARE FUNCTIONS
        - DECLARATIONS
        function nameFunction( parameters ){
            // Do something
            return value
        }

        - EXPRESSION:
        * WITH FUNCTION (DEPRECATED)
            var nameFunction = function() {
                // Do something
                return value
            }
        * ARROW FUNCTIONS (RECOMMENDED)
            const nameFunction = ( parameters ) => {
                // Do something
                return value
            }
            - IF ONLY RETURN A VALUE
                const nameFunction = ( parameters ) => value

    - PARAMETERS AND ARGUMENTS
            - PARAMETERS
                Local variables that are defined in the declaration of the function
                * You cand define default values to the parameters
                    > const greeting = ( person = "visitante", gender = "m" ) => {}
                      greeting("Peter","m")
                      greeting()

            - ARGUMENTS
                values assigned to the parameters

            - REST PARAMETERS ( SPREAD OPERATOR )
                You can send any quantity of elements
                    function (...arguments)

                    >   const addAll = (...numbers ) => {
                            console.log(numbers);
                        }
                        addAll(1,2,3,4,5)
                            * [1,2,3,4,5]

    - SAVE IN VARIABLES                     (FUNCTION FOR EXPRESSION)
        const c = console.log
        const multiply = (a,b) => a * b

        c(multiply(3,4))
        * 12

    - ARGUMENTS OF ANOTHER FUNCTION         (CALLBACKS)


    - RETURN FUNCTION FROM ANOTHER FUNCTION (CLOSURES)
        function sumar(x){
            return function(y){
                return x + y
            }
        }

        console.log(sumar(5)(2))
        * 7

        const sumar = x => y => x + y

        console.log(sumar(10)(20))
        * 30

    - HAVE METHODS OR PROPERTIES            (POO)

    __ TYPE OF FUNCTIONS __
    - PURE FUNCTIONS
        No have secundary effects
        No modiffy nothing external (var, let, functions, etc)

    - AUTO INVOKED FUNCTIONS
        const sumar = ((saludo,persona)=> `${saludo} ${persona}`)('Hi','pedro')
        console.log(sumar)
        * "Hi pedro"

    - AUTO NAMED AND ANONIMATE FUNCTIONS
        > NAMED
          const saludar = () => {}
        > ANONIMATE
          setTimeout(()=>{

          },3000)

    __ SCOPE __
          > WORKS
              {
                let person = 'fredy'
                {
                  console.log(person)
                }
              }

          > DON'T WORKS
          {
            let person = 'fredy'
          }
          console.log(person)

    __ CLOSURES __

          function sumar () {
            let number = 0
            return function () {
              number ++
              console.log(number)
            }
          }

          sumar()()

  __ THIS __
          let person = {
            name: "alex",
            age: 45,
            getAge (){
              console.log(this.age);
            }
          }

  __ ARRAYS __
  ["hi" , 2 , false , undefined , [1,2,3] , {}]

    - DESTRUCTURING
        let arrayp = ["hola","juan","pablo","mf"]

        let [s1,s2,s3,s4] = arrayp
        console.log(s2);
        * "juan"

    - ADD AND REMOVE FROM ARRAY
        > AT THE FINISH
            .push(value)
                add element at the end
                return the new length
            .pop()
                return the last value

        > AT THE START
            .unshift(value)
                add element at the start
                return the new length
            .shift()
                return the fist value

        > CUSTOMIZED POSITION
            .splice(startIndex, quantityToDelete , value1, value2 , value3...)
                add elements in a specific position
            .splice(startIndex, quantityToDelete)
                remove elements in a specific position

            .slice(startPosition, endPosition* optional)
                no modify the original array
                extrat the items selected

    - ORDER
        .reverse()
            let array = ["h","o","l","a"]

            array.reverse()
                *  ["a","l","o","h"]
                *  ["a","l","o","h"].join()
                    * "aloh"

        .sort(callback)
            ["B","A","Z","F"].sort()
                * ["A","B","F","Z"]

            ["B","A","Z","F"].sort().reverse()
                * ["Z","F","B","A"]

        WITH NUMBER
        let numbers = [10,25,100,300,45]
        numbers.sort((a,b) => a - b )

    - JOIN ARRAYS, CONVERT ARRAYS TO STRING
          .join(separator)
            convert the array to string

                numbers.join(' ')
                    * "10 25 100 300 45"
                numbers.join(',')
                    * "10,25,100,300,45"
          .concat()
            add two arrays to another new
                let array1 = [1,2,3,4,5]
                let array2 = [6,7,8,9,10]
                array1.concat(array2)
                    * [1,2,3,4,5,6,7,8,9,10]

    - FIND ELEMENTS
          .indexOf(value)
                let array1 = [1,2,3,4,5]
                array1.indexOf(4)
                    * 3
          .find(callback)
                let array1 = [1,2,3,4,5]
                array1.find( numbe => number > 3 )
                    * 4
          .findIndex(callback)
                let array1 = [1,2,3,4,5]
                array.findIndex( number => number > 3)
                    * 3

    - SPREAD OPERATOR

    - DELETE DUPLICATED ELEMENTS IN ARRAY
        new Set()
            don't allow duplicated values

            let array1 = [1,2,3,6,7,2,3]
            new Set(array1)
                * {1,2,3,6,7}

                [...new Set(array1)]
                    * [1,2,3,6,7]

            const removeDuplicates = array => [...new Set(array)]
            removeDuplicates(array1)
                * [1,2,3,6,7]

    - TRAVEL AN ARRAY
        - for
            let arr1 = ['a','b','c','d','e','f']

            for(let i = 0; i < arr1.length; i++ ){
                console.log(i);
            }
                * a
                * b
                * ...

        - for of
            for(let element of arr1){
                console.log(element);
            }
                * a
                * b
                * ...

        - forEach
            arr1.forEach( (element, index ) =>{
                console.log(index);
            })
        - .some(callback) .every(callback)
            both return a boolean

            - SOME
                let teachers = ["Alexys","Beto","Daniel","Jon","José","Manu"]
                teachers.some( element => element === 'Alexys' )
                    * true
                teachers.some( element => element === 'Geronimo' )
                    * false
            - EVERY
                All elements must fulfill the condition
                teachers.every( element => element.includes('a') )
                    * false
                teachers.every( element => element.length >= 3 )
                    * true

        - map()
            transform all elements of the array
                let number = [1,2,3,4,5]
                number.map( element => element * element )
                    * [1,4,9,16,25]
        - filter()
            filtra all elements that fulfill the condition

        - reduce()
            let sum = number.reduce( (a,b) => a + b)
                * 15

    __ OBJECTS __
        - STRUCTURE
            {
                property1: value1,
                property2: value2,
                property3: value3,
                method() {
                    // code
                }
            }

        - PROPERTIES
            - EXPRESSIONS []
                let a = "hola", b = "mundo"
                let saludo = {
                    [ a + b ]: 'Mi primer hola mundo'
                }
            - EQUIALIZE TO VARIABLES
                let myObject = {
                    a: a,
                    b: b
                }
                    OR
                let myObject = { a, b}
            - METHODS

        - PROTOTYPES AND STRING OF PROTOTYPES
            - .prototype
                element.prototype.firstLenght = "Esoooo!"
            - Object.getPrototypeof('hola mundo')
                know type of prototype

        - OPERATORS
            let perro = {
                nombre: 'juanito',
                edad: 3,
                sexo: 'macho'
            }
            - ADD AND REMOVE PROPERTIES OF AN OBJECT
                > Delete
                    delete perro.edad
                        *true
                > Add
                    perro.nombre = 'pepe'
                        * {nombre: "pepe"}
            - IN - HASOWNPROPERTY
                > in
                    'sexo' in perro
                        * true
                    'vacuna' in perro
                        * false
                > for in
                    for(let property in perro){
                        console.log(property);
                    }
                    * nombre
                    * edad
                    * sexo
                > hasOwnProperty
                    for(let property in perro){
                        if(perro.hasOwnProperty(property)){
                            console.log(property);
                        }
                    }

        - MUTABILITY
        
        - FOR IN
            Return the name of the properties
            
        - FOR OF
        - OBJECT.ENTRIES()
        - OBJECT.KEYS()
        - OBJECT.VALUES()


















        DOM
            - Es el modelo de la interpretacion de un HTML
        ETIQUETAS
        VIDEO

        CLOSURES:
            - Funciones dentro de funciones se les llama CLOSURES
            - La funcion hijo puede acceder a las VARIABLES de la funcion padre
            - Las variables se pasan por REFERENCIA
                - Si se modifica una VARIABLE dentro del CLOSURE, tambien se modifica en la funcion PADRE

            function hola_mundo(nombre){
                function construct(){
                    nombre = `Pedro`
                    return `Hola ${nombre}`
                }
                return construct()
            }
            hola_mundo('Juan')
                * "Hola Pedro"

        CALLBACK:
            - Funcion pasada como parametro en otra
            - Se ejecuta de manera asincrona al momento de que se termino algun proceso asincrono
        SCOPE:
            - nos indica en qué partes del programa podemos acceder a esa variable o si tenemos acceso a la misma
            - existen dos tipos de scope: local y global
        motores

        ES6:
            - TEMPLATE STRING: ``
            - ARROW FUNCTIONS: () => {}
            - CLASES
            - LET, CONST
            - DEFAULT PARAMETER VALUES
            - ARRAY.FIND( number => number > 3 )
                * 5
            - ARRAY.FINDINDEX( number => number > 3 )
                * 2 [position]
            - NUMBER.ISINTEGER()
            - ISFINITE(10/0) false
            - ISNAN("Hello") true

        PATRONES:
            - MODULE DESIGN PATTERN
                - Modularizar por modulos la app. EJ: TIENDA * Modulo ventas * Modulo pedidos

                    - IN JAVASCRIPT WITH ANONIMOUS FUNCTIONS(function(){
                            // private variables and/or functions
                        return{
                            // public variables and/or functions
                        }
                    })();
            - OBSERVER DESIGN PATTERN
            - SINGLETON


        TIPOS DE DATOS:
            PRIMITIVOS
            COMPUESTOS

        ARROW FUNCTIONS:
            - sintaxis más corta
            - no vincula sus propios this, arguments, super, o new.target
            - siempre son anónimas
            - no pueden ser usadas como constructores

        selectores
        css dom

        BOX SIZIN BORDER BOX
            - Cuando tenemos una caja con un tamaño al agregarle un padding o border, no aumente su tamaño

        INLINE VS INLINE-BLOCK
            INLINE
                - No crean nuevas lineas (salto de linea)
                - No tienen ni ancho(definido por el contenido) ni alto
            INLINE-BLOCK
                - Convina block e inline y si tiene alto y ancho
                - No ocupa toda la pantalla

        RESPONSIVO VS ADAPTABLE
            RESPONSIVO
                - Es mas flexible y usa media querys para ir adaptandose al dispositivo
            ADAPTABLE
                - Tiene un diseño por tamaño predefinido
                - Usa medidas fijas y dependiendo del dispositivo se aplica uno u otro
        
        PROMESA
            - Operacion que no se ha completado y se espera que en futuro sea completada
*/