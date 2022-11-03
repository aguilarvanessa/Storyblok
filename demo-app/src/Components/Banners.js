
const Banners = (props) => {
    return ( 
            <>
                  <div className="header-section" style={{background:`url(${props.img}) no-repeat center bottom`,backgroundSize:""}}>
                    <div className="row justify-content-center py-2">
                        <div className="col-lg-6 col-md-6 col-sm-12 m-auto text-center py-4">
                            <div className='banner-sub-heading'>
                                {props.subheading}
                            </div> 
                            <div className='banner-heading'>
                                {props.heading}
                            </div>
                        </div>
                    </div>
              </div>
            </>
     );
}
 
export default Banners;