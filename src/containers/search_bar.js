import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this); // биндим this
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value })
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
        console.log('this.props',this)

    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit} className="inpun-group">
                    <input 
                        placeholder="Погодка на 5 дней"
                        className="form-control"
                        value={this.state.term}
                        onChange={this.onInputChange} // если callback ссылается на this, то ножно его забиндить
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">submit</button>
                    </span>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);