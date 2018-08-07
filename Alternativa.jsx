import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/lib/Button'
import { push } from 'react-router-redux'
import Grid from 'react-bootstrap/lib/Grid'
import { withRouter } from 'react-router-dom'
import AlternativaResumen from './AlternativaResumen'
import AlternativaForm from './AlternativaForm'
import AlternativaAnexo from './AlternativaAnexo'
import { _addAlternativaOfertaActiva } from '../redux/actions/oferta'

const path = require('path')

export class Alternativa extends React.Component {
    constructor(props){
        super(props)
        this.alternativaForm = React.createRef()
        this.alternativaAnexo = React.createRef()
        this.alternativaImagen = React.createRef()
    }

    navigateAndSave(path){
        const alternativa = {
            id: this.props.idAlternativa,
            data: {
                ...this.alternativaForm.current.getDataForm(),
                anexosAlternativa: this.alternativaAnexo.current.getDataAnexos(),
                imagenesAlternativa: this.alternativaImagen.current.getDataAnexos()
            }
        }
        this.props.addAlternativa(this.props.idRenglon, this.props.idAlternativa, alternativa)
        this.props.navigateTo(path)
    }
    
    validarAnexo = (pathAnexo) => {
        return this.props.pliegoActivo.data.ExtensionesValidasAnexoAlternativa.split(',').includes(path.extname(pathAnexo).replace('.',''))
    }

    validarImagen = (pathImagen) => {
        return this.props.pliegoActivo.data.ExtensionesValidasImagenAlternativa.split(',').includes(path.extname(pathImagen).replace('.',''))
    }

    render(){
        return (
            <Grid fluid>
                <h2 style={{paddingLeft: 10, textAlign: "left", fontWeight:"bold"}}>
                    Renglón {this.props.idRenglon}
                </h2>
                <h3 style={{paddingLeft: 10, textAlign: "left", fontWeight:"bold"}}>
                    Alternativa {this.props.idAlternativa}
                </h3>
                <h4 style={{paddingLeft: 10, textAlign: "left"}}>
                    Proceso de compra {this.props.numeroProceso}
                </h4>
                <AlternativaResumen />
                <AlternativaForm
                    ref={this.alternativaForm}
                    data={this.props.alternativaActiva.data}
                    pliegoActivo={this.props.pliegoActivo}
                />
                <AlternativaAnexo
                    ref={this.alternativaAnexo}
                    data={this.props.alternativaActiva.data.anexosAlternativa ? this.props.alternativaActiva.data.anexosAlternativa : {}}
                    pliegoActivo={this.props.pliegoActivo}
                    title="Anexos para el renglón"
                    anexoType="AnexoAlternativa"
                    labelButton="anexo"
                    validate={this.validarAnexo}
                />
                <AlternativaAnexo
                    ref={this.alternativaImagen}
                    data={this.props.alternativaActiva.data.imagenesAlternativa ? this.props.alternativaActiva.data.imagenesAlternativa : {}}
                    pliegoActivo={this.props.pliegoActivo}
                    title= "Imágenes para el renglón"
                    anexoType="ImagenAlternativa"
                    labelButton="imágen"
                    validate={this.validarImagen}
                />

                <Button onClick={() => this.props.navigateTo("/pasos/paso-2")}>Volver</Button> {/* TODO - Alertar */}
                <Button bsStyle="primary" onClick={() => this.navigateAndSave("/pasos/paso-2")}>Guardar y Volver</Button> {/* TODO - Update redux con getDataForm */}
                <br/>
                <br/>
            </Grid>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    alternativaActiva: state.ofertaActiva.pasos.paso2.renglones["renglon"+ownProps.match.params.idRenglon]["alternativa"+ownProps.match.params.idAlternativa],
    pliegoActivo: state.pliegoActivo,
    idRenglon: ownProps.match.params.idRenglon,
    idAlternativa: ownProps.match.params.idAlternativa,
    numeroProceso: state.pliegoActivo.data.NumeroProceso
})

const mapDispatchToProps = (dispatch) => ({
    navigateTo: (path) => dispatch(push(path)),
    addAlternativa: (idRenglon, idAlternativa, alternativa) => dispatch(_addAlternativaOfertaActiva(idRenglon, idAlternativa, alternativa))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Alternativa))