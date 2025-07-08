/// <reference types="cypress"/>

describe('Deletar Dispositivos', () => {

    const payload_cadastro_device = require('../fixtures/cadastro_device.json')

    it('Deletar Dispositivo Sucesso', () => {
       
        cy.cadastrarDevice(payload_cadastro_device)
            .then((response_post) => {
                expect(response_post.status).equal(200) 
            
                cy.deleteDeviceEspecifico(response_post.body.id)
                .then((response_delete) =>{
                    expect(response_delete.status).equal(200)  
            }) 
        })

    })

    it('Deletar Dispositivo Não Existente', () => {
    
        const id_inexitente = 'xxx'

        cy.deleteDeviceEspecifico(id_inexitente)
            .then((response_delete) =>{
                expect(response_delete.status).equal(404)
                expect(response_delete.body.error).equal(`Object with id = ${id_inexitente} doesn't exist.`)  
        })
           
    })

    //tentar deletar os id reservados 7 8 9 ....

})