const app = new Vue({

    el: '#app',
    data: {

        productos: [],
        nombre: '',
        descripcion: '',
        precio: '',

    },
    methods: {
        guardarProducto: function () {

            this.productos.push({
                nombre: this.nombre,
                descripcion: this.descripcion,
                precio: this.precio
            });
            this.nombre = '';
            this.descripcion = '';
            this.precio = '';
        },
        editarProducto: function (index) {
            this.productos[index].nombre = "editado";
            this.productos[index].descripcion = "editado";
            this.productos[index].precio = "editado";
        },
        eliminarProducto: function (index){
            this.productos.splice(index, 1);
        }
    }

});