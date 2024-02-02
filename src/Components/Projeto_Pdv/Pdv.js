import './Style.css'
import '../Root/Reset.css'
import acompanhamento from './Imagens/icon_acompanhamento.png'
import bebida from './Imagens/icon_bebida.png'
import lanche from './Imagens/icon_lanche.png'
import sobremesa from './Imagens/icon_sobremesa.png'
import { useState, createContext, useContext } from 'react'

const AppContext = createContext(null)

export default function Pdv() {
  const [nomeProduto, setNome] = useState("");
  const [precoProduto, setPreco] = useState("R$ 0.00");
  const [unidade, setUnidade] = useState(1)
  const [listaProdutos, setLista] = useState([])
  const [pedidos, setPedidos] = useState([])
  const [numeroPedido, setNumeroPedido] = useState(0)
  const [pedidosProntos, setPedidosProntos] = useState([])

  return (
    <div className='container__projeto'>Pdv (não responsivo)
      <AppContext.Provider value={{ nomeProduto, setNome, precoProduto, setPreco, unidade, setUnidade, listaProdutos, setLista, pedidos, setPedidos, numeroPedido, setNumeroPedido, pedidosProntos, setPedidosProntos }}>
        <LabelCategoria />
        <ExibicaoProdutos />
        <CadastroProduto />
        <Display />
        <TotalProdutos />
        <DisplayCozinheiro />
        <DisplayFinalizacao />
      </AppContext.Provider>
    </div>
  );
}

function LabelCategoria() {
  return (
    <div className="container__categorias">
      <div className="categoria">Lanche</div>
      <div className="categoria">Bebida</div>
      <div className="categoria">Acompanhamento</div>
      <div className="categoria">Sobremesa</div>
    </div>
  )
}

function ExibicaoProdutos() {
  const produtosJson = {
    lanche: [
      {
        imagem: lanche,
        nome: "x-tudo",
        preço: "R$ 25.99",
      },
      {
        imagem: lanche,
        nome: "x-salada",
        preço: "R$ 29.99",
      },
      {
        imagem: lanche,
        nome: "x-bacon",
        preço: "R$ 28.99",
      },
      {
        imagem: lanche,
        nome: "x-bacon-egg",
        preço: "R$ 29.99",
      },
      {
        imagem: lanche,
        nome: "x-egg",
        preço: "R$ 27.99",
      },
      {
        imagem: lanche,
        nome: "hot-dog",
        preço: "R$ 22.99",
      },
    ],
    bebida: [
      {
        imagem: bebida,
        nome: "fanta-laranja",
        preço: "R$ 7.99",
      },
      {
        imagem: bebida,
        nome: "fanta-uva",
        preço: "R$ 7.99",
      },
      {
        imagem: bebida,
        nome: "cola-cola",
        preço: "R$ 7.99",
      },
      {
        imagem: bebida,
        nome: "guarana",
        preço: "R$ 6.49",
      },
      {
        imagem: bebida,
        nome: "sprite",
        preço: "R$ 6.49",
      },
      {
        imagem: bebida,
        nome: "h2oh",
        preço: "R$ 6.49",
      },
    ],
    acompanhamento: [
      {
        imagem: acompanhamento,
        nome: "bata-frita pequena",
        preço: "R$ 9.99",
      },
      {
        imagem: acompanhamento,
        nome: "bata-frita média",
        preço: "R$ 11.99",
      },
      {
        imagem: acompanhamento,
        nome: "bata-frita grande",
        preço: "R$ 12.99",
      },
      {
        imagem: acompanhamento,
        nome: "10 nuggets",
        preço: "R$ 11.99",
      },
    ],
    sobremesa: [
      {
        imagem: sobremesa,
        nome: "sundae",
        preço: "R$ 5.99",
      },
      {
        imagem: sobremesa,
        nome: "casquinha",
        preço: "R$ 2.99",
      },
      {
        imagem: sobremesa,
        nome: "torta",
        preço: "R$ 9.99",
      },
      {
        imagem: sobremesa,
        nome: "top sundae",
        preço: "R$ 8.99",
      },
      {
        imagem: sobremesa,
        nome: "milk-shake",
        preço: "R$ 11.99",
      },
    ],
  };
  const { setNome, setPreco, setUnidade } = useContext(AppContext)

  function clicarProduto(el) {
    if (el.target.className === 'produto') {
      setNome(el.target.children[1].outerText);
      setPreco(el.target.children[2].outerText);
      setUnidade(1)
    } else {
      setNome(el.target.parentElement.children[1].outerText);
      setPreco(el.target.parentElement.children[2].outerText);
      setUnidade(1)
    }
  }

  return (
    <div className='container__produtos'>
      {Object.keys(produtosJson).map((categoria) => {
        const produtosDaCategoria = produtosJson[categoria];
        return (
          <div key={categoria} className='container__categoria--produtos'>
            {produtosDaCategoria.map((produto) => (

              <div key={produto.nome} className='produto' onClick={clicarProduto} >
                <img className='imagem__produto' src={produto.imagem} alt={produto.nome} />
                <div className='descricao__produto'>{produto.nome}</div>

                <div className='preco__produto'>{produto.preço}</div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

function CadastroProduto() {
  const { nomeProduto, precoProduto, unidade, setUnidade, setLista, listaProdutos, setPreco, setNome } = useContext(AppContext)

  function atualizarQuantidade(el) {
    if (unidade > 0 && nomeProduto !== "" && el.target.outerText === '+') {
      setUnidade(unidade + 1)
    } else if (unidade > 1 && nomeProduto !== "" && el.target.outerText === '-') {
      setUnidade(unidade - 1)
    }
  }

  function adicionarProduto() {
    if (nomeProduto !== "") {
      const prodBool = listaProdutos.find(
        (el) => el[0] === nomeProduto
      );
      if (listaProdutos.find((el) => el[0] === nomeProduto)) {
        prodBool[1] += unidade;
        prodBool[2] = Number(prodBool[1] * precoProduto.slice(2)).toFixed(2)
      } else {
        listaProdutos.push([nomeProduto, unidade, Number(unidade * precoProduto.slice(2)).toFixed(2)]);
      }
      setLista(listaProdutos)
      setUnidade(1)
      setPreco("R$ 0.00")
      setNome("")
    }
  }

  return (
    <div className="cadastro__produtos">
      <div className="cadastro__container container__produto">
        <label htmlFor="show__produto" className="label__texto--produto">Produto :</label>
        <input type="text" name="" id="show__produto" className="area__produto texto__produto" value={nomeProduto} />
      </div>
      <div className="cadastro__container container__preco">
        <label htmlFor="show__preco" className="label__texto--produto">Preço :</label>
        <input type="text" name="" id="show__preco" className="area__produto texto__preco" value={precoProduto} />
      </div>
      <div className="cadastro__container container__quantidade">
        <label htmlFor="show__quantidade" className="label__texto--produto" >Quantidade :</label>
        <input type="number" name="" id="show__quantidade" className="area__produto texto__quantidade" value={unidade}
        />
      </div>
      <div className="cadastro__botoes">
        <button className="botao__mais" onClick={atualizarQuantidade} >+</button>
        <button className="botao__menos" onClick={atualizarQuantidade}>-</button>
        <button className="botao__adicionar" onClick={adicionarProduto}>Adicionar</button>
      </div>
    </div>
  )
}

function Display() {
  const { listaProdutos, setLista } = useContext(AppContext);

  function removerItem(nomeItem) {
    const novaLista = listaProdutos.filter((el) => el[0] !== nomeItem);
    setLista(novaLista);
  }

  return (
    <div className="tela__produtos">
      <div className="descricao__produtos">
        <div className="label__produto">Item</div>
        <div className="label__produto">Un</div>
        <div className="label__produto">Total</div>
        <div className="label__produto">Remover</div>
      </div>
      <div className="tela">
        {listaProdutos.map((el) => {
          return (
            <div className="tela__produto" key={el[0]}>
              <div className="item">{el[0]}</div>
              <div className="unidade">{el[1]}</div>
              <div className="preco">R$ {el[2]}</div>
              <div className="remover" onClick={() => removerItem(el[0])}>
                X
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TotalProdutos() {
  const { listaProdutos, setPedidos, pedidos, setLista, numeroPedido, setNumeroPedido } = useContext(AppContext);
  const total = totalFunc()

  function totalFunc() {
    let total = 0
    if (listaProdutos.length > 0) {
      listaProdutos.forEach((el) => {
        return total += Number(el[2])
      })
    }
    return total.toFixed(2)
  }
  function finalizarPedido() {
    const pedido = []
    setNumeroPedido(numeroPedido + 1)
    if (listaProdutos.length > 0) {
      listaProdutos.forEach((el) => {
        pedido.push([el[0], el[1], numeroPedido])

      })
      pedidos.push(pedido)
      setPedidos(pedidos)
      setLista([])
    }
  }
  return (
    <div className="total__produtos">
      <div className="total__produtos--form">
        <label htmlFor="total" className="total__produtos--label">Valor Total :</label>
        <input type="text" id="total" className="total__produtos--valor" value={"R$ " + total} />
      </div>
      <button className="botao__finalizar" onClick={finalizarPedido}>Finalizar</button>
    </div>
  )
}

function DisplayCozinheiro() {
  const { pedidos, setPedidos, pedidosProntos, setPedidosProntos } = useContext(AppContext)

  function finalizarDisplay(ele) {
    let novaLista = pedidos.filter((ell) => ell[0][2] !== Number(ele.target.parentElement.parentElement.childNodes[0].childNodes[1].outerText.slice(2)))
    setPedidos(novaLista)
    pedidosProntos.push(Number(ele.target.parentElement.parentElement.childNodes[0].childNodes[1].outerText.slice(2)))
    setPedidosProntos(pedidosProntos)
  }

  return (
    <div className="dispayP">
      <div className="displayP__finalizacao">
        <div className="displayP__label">
          <div>PRODUTO :</div>
          <div>Numero Pedido :</div>
        </div>
        {pedidos.map((el) => {
          return (
            <>
              <div className='pedido__container'>
                <div className='pedido__label'>
                  <div>pedido</div>
                  <div className='pedido__numero pedido__une' ># {el[0][2]}</div>
                </div>
                {el.map((ele) => {

                  return (
                    <div className="displayP__containerFinalizacao">
                      <div>{ele[0]}</div>
                      <div className="pedido__une" >{ele[1]}</div>
                    </div>
                  )
                })}
                <div class="diplayP__btn">
                  <label htmlFor='botaoPedido'>FINALIZAR :</label>
                  <button id="botaoPedido" onClick={finalizarDisplay} className="diplayP__btnfin">X</button>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div >
  )
}

function DisplayFinalizacao() {
  const { pedidos, pedidosProntos } = useContext(AppContext)
  return (
    <div className="displayF">
      <div className="displayF__label">Pronto :    </div>
      <div className="displayF__label">Fazendo :    </div>
      <div className="displayF__containerPronto">
        {pedidosProntos.map((el) => {
          return (
            <div className='displayF__produto--pronto'># {el}</div>
          )
        })}
      </div>
      <div className="displayF__containerFazendo">
        {pedidos.map((el) => {
          return (
            <div className='numeroFazendo'># {el[0][2]}</div>
          )
        })}
      </div>
    </div>
  )
}