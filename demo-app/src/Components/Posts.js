import {render} from 'storyblok-rich-text-react-renderer-ts';
import {NODE_LI, NODE_PARAGRAPH, NODE_UL} from "storyblok-rich-text-react-renderer"

const Posts = ({data}) => {
   let TextArea = data.Posts
    return ( 
        <>
           
            <div style={{ width:"500px"}}>
                {
                        render(TextArea,{
                            nodeResolvers:{
                                [NODE_LI]: (TextArea) => <li>{TextArea}</li>,
                                [NODE_UL]: (TextArea) => <ul className="media-list">{TextArea}</ul>,
                                [NODE_PARAGRAPH]: (TextArea) => <p className="paragraph-text">{TextArea}</p>
                            }
                        })
                }
            </div>
        </>

     );
}
 
export default Posts;