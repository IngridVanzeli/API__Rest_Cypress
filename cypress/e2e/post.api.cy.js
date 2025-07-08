/// <reference types="cypress"/>

describe('Cadastro Dispositivo', () => {

    const payload_cadastro_device = require('../fixtures/cadastro_device.json')
    const dataAtual = new Date().toISOString().slice(0,10)

    it('Cadastrar um Dispositivo', () => {
    
        cy.cadastrarDevice(payload_cadastro_device)
            .then((response) => {
                expect(response.status).equal(200)
                expect(response.body.id).not.empty
                expect(response.body.createdAt).not.empty
                expect(response.body.createdAt.slice(0,10)).equal(dataAtual)
        })
    
    })

    it('Cadastrar um Dispositivo sem Dados', () => {
    
        cy.cadastrarDevice('') 
            .then((response) => {
                expect(response.status).equal(400)
                expect(response.body.error).equal('400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.')
        })
    
    })

})