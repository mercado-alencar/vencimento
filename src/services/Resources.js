
import APIRequest from './ApiRequest';


export const $produtos = new APIRequest('http://localhost:3030/api/produto');
export const $setor = new APIRequest('/setor');
export const $funcionarios = new APIRequest('/funcionario');
export const $vencimentos = new APIRequest('/vencimento');