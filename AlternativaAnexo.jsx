import React from 'react'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Alert from 'react-bootstrap/lib/Alert'
import Table from 'react-bootstrap/lib/Table'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

import { obtenerNombreArchivo, loadFileFromFileSystem } from '../utils/utils'

const { shell } = window.require('electron')


const concatAlert = (clave) => {
    return clave+"Alert"
}

class AlternativaAnexo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            [props.anexoType]: props.data,
            [concatAlert(props.anexoType)]: false,
        }
    }

    getDataAnexos = () => {
        return this.state[this.props.anexoType]
    }

    cargarAnexo = () => {
        loadFileFromFileSystem()
        .then((pathAnexo) => {
            const validate = this.props.validate(pathAnexo)
            if(validate){
                const anexo = {
                    nombre: obtenerNombreArchivo(pathAnexo),
                    pathAnexo
                }
                this.setState({
                    ...this.state,
                    [this.props.anexoType]:[
                        ...this.state[this.props.anexoType],
                        anexo
                    ]
                })
                this.handleDismiss(concatAlert(this.props.anexoType))
            }else{
                this.setState({
                    ...this.state,
                    [concatAlert(this.props.anexoType)]: true
                })
            } 
        })
        .catch((err) => console.log("Hubo un error al cargar el archivo"))
    }
    
    getRowsAnexos = () => {
        return this.state[this.props.anexoType].map((row, i) => {
            return (
                <tr key={i}>
                    <td>{row.nombre}</td>
                    <td>
                    <Button
                        bsClass=""
                        style = {{border: "0px", backgroundColor: 'rgba(0, 0, 0, 0)'}}
                        onClick={()=>{
                            shell.openItem(
                                row.pathAnexo
                            )}
                        }
                    >
                        <Glyphicon glyph={"search"}/>
                    </Button>
                    <Button bsClass="" bsStyle="danger"
                        style = {{border: "0px", backgroundColor: 'rgba(0, 0, 0, 0)', color:'red'}}
                        onClick={()=>this.setState({
                                ...this.state,
                                [this.props.anexoType]: this.state[this.props.anexoType].filter(anexo=>anexo.nombre!==row.nombre)
                            })
                        }
                    >
                        <Glyphicon glyph={"trash"}/>
                    </Button>
                    </td>
                </tr>
            )
        })
    }

    getPliegosTableHeadAnexos = () =>
        <tr>
            <th style={{width:"50%"}}>Nombre</th>
            <th>Acciones</th>
        </tr>

    handleDismiss = () => {
        this.setState({
            ...this.state,
            [concatAlert(this.props.anexoType)]: false
        })
    }

    render(){
        return (
            <div>
                <h3 style = {{paddingLeft: 10, textAlign: "left", fontWeight:"bold"}}>
                    {this.props.title}
                </h3>
                {this.state[concatAlert(this.props.anexoType)] && <Alert style={{paddingLeft: 10, textAlign: "left"}} bsStyle="danger" onDismiss={() => this.handleDismiss(concatAlert(this.props.anexoType))}>
                    El formato del archivo debe corresponder a las extensiones: {this.props.pliegoActivo.data["ExtensionesValidas"+this.props.anexoType]}
                </Alert>}
                <ButtonToolbar>
                    <Button className="pull-left" bsStyle="primary" onClick={() => this.cargarAnexo()}>
                        + Cargar {this.props.labelButton}
                    </Button>
                </ButtonToolbar>
                <span className="pull-left" style={{fontStyle:"italic"}}>Se permite subir archivos con extensión {this.props.pliegoActivo.data["ExtensionesValidas"+this.props.anexoType]} y de hasta {this.props.pliegoActivo.data["TamanioMaximo"+this.props.anexoType+"MB"]} mb</span>
                <br/>
                <br/>
                {this.state[this.props.anexoType].length > 0 && <Panel>
                    <Table striped condensed hover style={{textAlign:'left'}}>
                        <thead>
                            {this.getPliegosTableHeadAnexos()}
                        </thead>
                        <tbody>
                            {this.getRowsAnexos()}
                        </tbody>
                    </Table>  
                </Panel>}
            </div>
        )
    }
}

export default AlternativaAnexo