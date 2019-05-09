import React, { Component } from 'react';

export default class CreateListing extends Component {

    constructor(props) {
        super(props);

        this.onChangeListingDescription = this.onChangeListingDescription.bind(this);
        this.onChangeListingResponsible = this.onChangeListingResponsible.bind(this);
        this.onChangeListingPriority = this.onChangeListingPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            listing_description: '',
            listing_responsible: '',
            listing_priority: '',
            listing_completed: false
        }
    }

    onChangeListingDescription(e) {
        this.setState({
            listing_description: e.target.value
        });
    }

    onChangeListingResponsible(e) {
        this.setState({
            listing_responsible: e.target.value
        });
    }

    onChangeListingPriority(e) {
        this.setState({
            listing_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Listing Description: ${this.state.listing_description}`);
        console.log(`Listing Responsible: ${this.state.listing_responsible}`);
        console.log(`Listing Priority: ${this.state.listing_priority}`);
        
        this.setState({
            listing_description: '',
            listing_responsible: '',
            listing_priority: '',
            listing_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Listing</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.listing_description}
                                onChange={this.onChangeListingDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.listing_responsible}
                                onChange={this.onChangeListingResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.listing_priority==='Low'} 
                                    onChange={this.onChangeListingPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={this.state.listing_priority==='Medium'} 
                                    onChange={this.onChangeListingPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={this.state.listing_priority==='High'} 
                                    onChange={this.onChangeListingPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Listing" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
