// Gerson Rubén Quiroa del Cid; carné: 202000166
class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
    }
}

class ListaDoble {
    constructor(){
        // primer dato de la lista
        this.primero = null;
        this.size = 0;
    }

    add(valor) {
        // creando el nuevo nodo con el dato
        let nuevo = new Nodo(valor); 
        let aux = this.primero;
        if (aux == null) {
            aux = nuevo;
            // punteros apuntándose a sí mismos por tener solo un dato
            aux.siguiente = nuevo;
            aux.anterior = nuevo;
            this.primero = aux;
            // aumentando tamaño
            this.size++;
        }else {
            while(aux.siguiente != this.primero) {
                aux = aux.siguiente;
            }
            aux.siguiente = nuevo;
            nuevo.anterior = aux;
            // el puntero del último apuntará al primero y viceversa
            nuevo.siguiente = this.primero;
            this.primero.anterior = nuevo;
            // aumentando tamaño
            this.size++;
        }
    }

    delete() {
        let aux = this.primero;
        while(aux.siguiente != this.primero) {
            aux = aux.siguiente;
        }
        // borramos la dirección de memoria del último dato y se los asignamos al penúltimo
        aux.anterior.siguiente = this.primero
        this.primero.anterior = aux.anterior 
        // disminuyendo tamaño
        this.size--;
    }

    mostrar() {
        let aux = this.primero;
        console.log('====LISTA DOBLEMENTE ENLAZADA====')
        console.log('->' + aux.dato);
        while(aux.siguiente != this.primero) {
            console.log('->' + aux.siguiente.dato);
            aux = aux.siguiente;
        }
        console.log('primero de la lista: ' + aux.siguiente.dato)
    }
}

// probando
let lista = new ListaDoble();
lista.add(5);
lista.add(1);
lista.add(10);
lista.add(4);
lista.add(12);
lista.add(20);
lista.add(11);
lista.add(13);
console.log('tamaño de la lista: ' + lista.size);
lista.mostrar();
lista.delete();
lista.mostrar();
lista.delete();
lista.mostrar();
lista.delete();
lista.mostrar();
console.log('tamaño de la lista: ' + lista.size);