
import { useStoryblok } from '@storyblok/react';
import './App.css';
import Banners from './Components/Banners';
import Posts from './Components/Posts';

function App() {
  const BannerSlug= "story-sample";
  const BannerStory = useStoryblok(BannerSlug,{version:"published"});
  
  const RichTextSlug = "text-section";
  const RichTextStory =  useStoryblok(RichTextSlug,{version:"published"});
  
  if(!BannerStory.content || !RichTextStory.content){return <></>}
  console.log(RichTextStory.content)
  return (<>
          
            <div className="App">
                <Banners img={BannerStory.content.Banner.filename}  subheading={BannerStory.content.subheading} heading={BannerStory.content.heading} />
            </div>
            <div style={{backgroundColor:"#F0F0F0"}}>
                    <Posts data={RichTextStory.content} />
            </div>
  
        </>
  );
}

export default App;
