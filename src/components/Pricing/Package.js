import React from 'react';
import packages from './packageContent'
import SinglePackageService from './SinglePackageService';

class Package extends React.Component {

    

    render() {
        const days = {
            fontSize: '2rem'
        }
        const service = {
            fontSize: '1rem'
    
        }

        return (
            <section id="pricing" className="bg-light">
                <div className="col-lg-12 text-center wow slideInUp" data-wow-delay=".6s">
                    <h2 className="margin-top-0 text-light">What we have?</h2>
                    <hr className="light"/>
                </div>

                <div class="gallery-wrap container">
                    {packages.map((singlePackage, index) => {
                        return (
                            <div class="item conatiner text-center">
                                <div class="singlePackage conatiner">
                                    <h1>{singlePackage.packageName}</h1>
                                    <div style={days} className="desc">
                                        Days: {singlePackage.days}

                                        &nbsp; Rs {singlePackage.price}
                                        /-
                                    </div>
                                    <div style={service} className="services">
                                    <h3>Services</h3>
                                        
                                        {singlePackage
                                            .services
                                            .map((singlePackageService, i) => {
                                                return (<SinglePackageService singlePackageService={singlePackageService}/>)
                                            })
}
                                    </div>

                                </div>
                            </div>
                        )
                    })}

                </div>

            </section>
        );
    }
}

export default Package;