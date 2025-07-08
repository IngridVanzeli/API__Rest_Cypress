/// <reference types="cypress"/>

describe('Editar Dispositivos', () => {

    const dataAtual = new Date().toISOString().slice(0,10)

    it('Editar Dispositivos Sucesso', () => {
       
        const payload_cadastro_device = require('../fixtures/cadastro_device.json')
        const payload_edicao_device = require('../fixtures/edicao_device.json')

        cy.cadastrarDevice(payload_cadastro_device)
            .then((response_post) => {
                expect(response_post.status).equal(200) 
                expect(response_post.body.name).equal(payload_cadastro_device.name)
                
                cy.editarDevice(payload_edicao_device,response_post.body.id)
                    .then((response_put) =>{
                        expect(response_put.status).equal(200) 
                        expect(response_put.body.name).equal(payload_edicao_device.name)
                        expect(response_put.body.updatedAt.slice(0,10)).equal(dataAtual)
                        expect(response_put.body.data.year).equal(payload_edicao_device.data.year)
                        expect(response_put.body.data.price).equal(payload_edicao_device.data.price)
                        expect(response_put.body.data['CPU model']).equal(payload_edicao_device.data['CPU model'])
                        expect(response_put.body.data['Hard disk size']).equal(payload_edicao_device.data['Hard disk size'])
                        expect(response_put.body.data.color).equal(payload_edicao_device.data.color)
                    })
                
            }) 
    })

})