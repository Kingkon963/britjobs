import React, {Component} from 'react';

class SubscribeForm extends Component{

    render() {
        return(
            <div className="row mt-5 py-5" id="subscribtion_row">
                <div className="col-12">
                    <h3 className="text-center text-white">Subscribe for job alert</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-4 mt-3">
                    <form>
                        <div className="subscribtion_form_grid">
                            <input className="form-control" type="text" placeholder="First Name" id="sub_f_name"/>
                            <input className="form-control" type="text" placeholder="Last Name" id="sub_l_name"/>
                            <input className="form-control" type="email" placeholder="Email" name="email" id="sub_email"/>
                            <select>
                                <option selected>Choose job sector</option>
                                <option>IT</option>
                                <option>Law</option>
                            </select>
                            <select>
                                <option selected>Choose Location</option>
                                <option>London</option>
                                <option>Dhaka</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div className="col-12 mt-4 d-flex justify-content-center">
                    <button>Get job alert</button>
                </div>
            </div>
        );
    }
}

export default SubscribeForm;