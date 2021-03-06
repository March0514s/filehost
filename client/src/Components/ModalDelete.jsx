import React, { Component } from 'react';


class ModalDelete extends Component {
    // constructor(props){
    //     super(props)
    // }
    
    close = () => {
        this.props.modalActionCB(null);
    }
    
    multiDelete (entries){
        entries.map(x => this.props.delete(x))
        this.props.modalActionCB(null)
    }

    render() {
        return (
            <div className="modal is-active">
                <div className="modal-background" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="modal-content" syle={{ display: "flex", justifyContent: "center" }}>
                        <div className="box column is-7 is-offset-3">
                            <div style={{ marginBottom: "15px", marginTop: "5px", display: "flex", justifyContent: "center" }}>
                                <span className="has-text-danger"><i className="fas fa-exclamation-triangle fa-4x" /></span>
                            </div>
                            <p className="has-text-centered">Are you sure you want to delete the selected files? This operation cannot be undone.</p>
                            <div style={{ marginTop: "25px", display: "flex", justifyContent: "space-between" }}>
                                <button onClick={this.close} className="button ">Cancel</button>
                                <button onClick={() => this.multiDelete(this.props.selectedFiles)} className="button is-danger">Delete</button>
                            </div>
                        </div>

                    </div>
                </div>
                <button onClick={this.close} className="modal-close is-large" aria-label="close"></button>
            </div>
        )
    }
}

export default ModalDelete;