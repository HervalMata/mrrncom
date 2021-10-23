import Correios from "node-correios";
import {Product} from "../modules/products/entities/Product";
import { nCdServico, sCepOrigem } from "../config/postOffices";
import { calcBox } from "../helpers/calcBox";

interface IPostOffice {
    products: Product[];
    cep: string;
}

const postOffices = new Correios();

const calcularFrete = async ({ cep, products }: IPostOffice) => {
    const _products = products.map(item => ({
      pesoKg: item.pesoKg,
      profundidadeCm: item.profundidadeCM,
      alturaCm: item.alturaCM,
      larguraCm: item.larguraCM,
      quantidade: item.stock,
      preco: item.price,
  }));
    const box = calcBox(_products);
    const pesoTotal = _products.reduce((all, item) => all + ( item.pesoKg * item.quantidade ), 0);
    const valorFinal = _products.reduce((all, item) => all + ( item.preco * item.quantidade ), 0);
    try {
        const results = await Promise.all(
            nCdServico.split(",").map(async (servico) => {
                const result = await postOffices.calcPrecoPrazo({
                    nCdServico: servico,
                    sCepOrigem: sCepOrigem,
                    sCepDestino: cep,
                    nVlPeso: pesoTotal,
                    nCdFormato: 1,
                    nVlComprimento: box.comprimento,
                    nVlAltura: box.altura,
                    nVlLargura: box.largura,
                    nVlDiametro: 0,
                    nVlValorDeclarado: valorFinal < 19.5 ? 19.5 : valorFinal,
                });
                return { ...result[0] };
            })
        );
        return results;
    } catch (e) {
        console.log(e);
    }
}

export { calcularFrete };

