import '../global.css';
import '../header.css';
import './styles.css';

import * as echarts from 'echarts'

document.getElementById("create-product").addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

    const name = document.getElementById("name") as HTMLInputElement
    const category = document.getElementById("category") as HTMLInputElement
    const manufacturer = document.getElementById("manufacturer") as HTMLInputElement
    const amount = document.getElementById("amount") as HTMLInputElement

    const product = {
        name: name.value,
        category: category.value,
        manufacturer: manufacturer.value,
        amount: amount.value
    };


    (window as any).productAPI.createProduct(product)
})

document.getElementById("buscar-product").addEventListener("click", async (event: MouseEvent) => {
    const products = await (window as any).productAPI.findAll();

    console.log(products);

    const div = document.getElementById("lista-product");
    div.innerHTML = "";

    for(var i = 0; i < products.length; i++){
        div.innerHTML += `
            <span>Nome: ${products[i].name}</span> - <span>Categoria: ${products[i].category}</span> <br ><br >
        `
    }
})

document.getElementById("buscar-amount-by-category").addEventListener("click", async (event: MouseEvent) => {
    const values = await (window as any).productAPI.findAmountByCategory();
    console.log(values);

    const amounts = [];
    const categories = [];

    for(var i = 0; i < values.length; i++){
        amounts.push(values[i].amount);
        categories.push(values[i].category);
    }

    const div = document.getElementById("grafico") as HTMLDivElement;
    const grafico = echarts.init(div);
    const option = {
        xAxis: {
          type: 'category',
          data: categories
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: amounts,
            type: 'bar'
          }
        ]
      };

    grafico.setOption(option);
})

