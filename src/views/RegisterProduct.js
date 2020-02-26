import React, { useEffect } from 'react';

// components
import Footer from '../components/Footer';
import MenuLayout from '../components/Menu';

function RegisterProduct() {
    const [nameProduct, setNameProduct] = React.useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        setThreArray([...threArray, {
            id: Math.floor(Math.random() * 999),
            name: nameProduct,
            stock: stockProduct,
            price: priceProduct,
            quantity: quantityProduct,
            desc: description
        }])
    }
    const [stockProduct, setStockProduct] = React.useState("")
    const [priceProduct, setPriceProduct] = React.useState("")
    const [quantityProduct, setQuantityProduct] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [threArray, setThreArray] = React.useState([])
    const [count, setCount] = React.useState(0);

    useEffect(() => {
    document.title = count;
    console.log("Obtendo dados");

    });

    return (
        <div className="RegisterProduct" id="RegisterProduct">
            <MenuLayout />
            <head>
                <title>Cadastro Produtos</title>
            </head>
            <h1>Cadastro de Produtos</h1>
            <h4>Cadastre novos produtos no estoque</h4>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div>
                    <label for="nameProduct">Nome do Produto</label>
                    <input id="nameProduct" name="nameProduct" required="required" type="text" placeholder="example" onChange={(event) => {
                        setNameProduct(event.target.value)
                    }} />
                </div>
                <div>
                    <label for="stockPro">Entrada Estoque</label>
                    <input id="stockPro" name="stockPro" required="required" type="date" placeholder="example" onChange={(event) => {
                        setStockProduct(event.target.value)
                    }} />
                </div>
                <div>
                    <label for="pricePro">Preço:</label>
                    <input id="pricePro" name="pricePro" required="required" type="number" placeholder="R$ 00,00" min="1" step="any" onChange={(event) => {
                        setPriceProduct(event.target.value)
                    }} />
                </div>
                <div>
                    <label for="quantityPro">Quantidade:</label>
                    <input id="quantityPro" name="quantityPro" required="required" type="number" placeholder="10" min="1" step="any" onChange={(event) => {
                        setQuantityProduct(event.target.value)
                    }} />
                </div>
                <div>
                    <label for="descriptionPro">Descrição:</label><br></br>
                    <textarea id="descriptionPro" name="descriptionPro" required="required" rows="5" cols="60" placeholder="Produto fragil, Guardar em geladeira" onChange={(event) => {
                        setDescription(event.target.value)
                    }} />
                </div>
                <input type="submit" onClick={() => setCount(count + 1)} value="Cadastrar Produto" />
                <input type="reset" value="Limpar" />
            </form>
            {
                threArray.map((items, index) => {
                    return (
                        <li key={index}>
                            {items.id}-{items.name}-{items.stock}-{items.price}-{items.quantity}-{items.desc}
                        </li>
                    )
                })
            }
            <Footer />
        </div>
    );
};
export default RegisterProduct;