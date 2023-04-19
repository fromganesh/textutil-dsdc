import React, {useState} from 'react'

export default function Card(props) {
    const [card,setText]= useState({
    color:"black",
        backgroundColor:"white"
    });

    const handleMode =()=>
    {
        if(card.color === "black"){
            setText({
                color:"white",
        backgroundColor:"black"
            });
        }
        else{
            setText({
            color:"black",
        backgroundColor:"white"
    })
        }
    }
  return (
    <div className="card p-5" style={{backgroundColor:props.mode === 'light'? 'white':'black',color:props.mode === 'light'?'black':'white' }}>
    {/* <img src="..." className="card-img-top" alt="..."/> */}
    <div className="card-body" style={card}>
      <h5 className="card-title">Card title</h5>
      <p className="card-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ipsa. Animi non tempora dignissimos nam architecto culpa accusamus, assumenda eum maxime aut, earum ipsa ipsam optio esse provident corrupti autem.
      Fugiat magni nesciunt consequuntur aut accusamus numquam voluptatum consectetur beatae perferendis velit perspiciatis unde similique dicta molestiae corrupti, ipsa aliquam, officia quaerat earum possimus a non quod? Ex, sint temporibus?
      Dolores corrupti corporis, iure ab rerum velit fugiat animi quam quisquam odit quo doloremque eos! Suscipit earum nihil aut animi! Quasi, quas dicta vitae at quo eveniet tempore molestiae ex!
      Vero eos, aut minima porro a rerum. Delectus, amet, doloribus dicta beatae dolorem odio nesciunt maxime est aliquam dolore ratione corporis voluptates dolores veritatis dignissimos debitis! Dolorem veniam aspernatur repudiandae.
      Omnis, provident magnam! Dolor id quis consectetur accusamus suscipit fuga corporis, similique fugiat impedit reiciendis, ipsum, qui et optio nam error harum? Sequi necessitatibus repudiandae quam quasi delectus dignissimos cumque.
      Debitis labore alias rem obcaecati eos possimus inventore adipisci, voluptas dolor est. Obcaecati culpa odio commodi in dicta laborum eum qui. Officiis fugit eius aliquam exercitationem veniam quasi inventore ea.
      In molestiae provident cupiditate odio minus consequatur! Tempora nam minus ratione tempore exercitationem reiciendis, corporis maxime asperiores consequuntur rem natus animi maiores nemo esse modi nobis molestias veritatis dolore accusantium!
      Consequuntur voluptatum culpa minus dolor! Totam, ut mollitia dicta reiciendis exercitationem facilis. Deserunt eum eveniet ad beatae vitae, fugiat sequi facilis possimus aliquam, quaerat vel perferendis. Incidunt repudiandae commodi molestiae!
      Accusantium ipsam at cumque officia corporis! Ullam, omnis! Ipsum ut adipisci nulla porro fugit tempora libero explicabo nostrum voluptatum molestias veritatis, qui ex placeat velit reprehenderit nesciunt doloribus delectus sit!
      Adipisci atque obcaecati culpa reiciendis tenetur non rerum dolores, placeat ipsum nobis, temporibus expedita ullam dolor a voluptas nam recusandae pariatur illo praesentium beatae provident nisi iure sit est. Sapiente.
      Quaerat eaque dolorum veritatis rem fugiat, aut dolores eligendi, temporibus delectus officia, ipsa suscipit excepturi reiciendis. Adipisci deserunt officiis alias dolorum dolore debitis earum rem incidunt, repellendus numquam aperiam est.
      Aspernatur nisi quis cupiditate nulla incidunt vero voluptatem tempora vitae maxime. Dolores consectetur omnis vel voluptatum modi dolore assumenda reprehenderit, nulla obcaecati similique cupiditate ullam dolorum, temporibus, nemo possimus. Eos.
      Magni hic veniam impedit libero eius unde temporibus modi maxime nulla, nihil omnis nostrum dolores praesentium quidem natus? Aliquid doloremque consequatur et labore perferendis nihil placeat delectus itaque amet reiciendis?
      Perferendis ad ipsum esse facilis repellat. Eum officia veniam quibusdam aliquid, praesentium, tenetur tempore adipisci assumenda repellendus incidunt delectus eligendi blanditiis ut sit nisi quidem consequuntur nam eveniet cupiditate consequatur?
      At fuga rem, sequi voluptatem quisquam repudiandae? Deserunt aspernatur voluptatibus cumque quae, ratione voluptatum! Corporis cum voluptates unde, modi voluptatum, omnis magnam illo repellendus aliquam odit quis ipsam, error possimus.
      Reiciendis repellendus commodi ipsa. Est aspernatur temporibus omnis commodi beatae velit quasi aliquam rerum in quibusdam non, repellendus perspiciatis sapiente autem odit tempora libero maxime. Labore expedita aspernatur sunt inventore.
      Quibusdam aut officiis quam nihil ducimus illum voluptatum accusamus voluptatem qui sunt laudantium inventore aliquid enim nemo iure similique suscipit reiciendis eius, delectus ad est! Voluptatem itaque rem temporibus iusto!
      Ex optio cum nostrum inventore voluptas at obcaecati natus harum iste aperiam consequuntur nobis nesciunt ut, doloremque error ab molestias expedita veritatis fuga. Modi vero doloribus dignissimos sequi quae quisquam.
      Labore, possimus, corporis eos cupiditate voluptatem itaque deleniti placeat velit harum voluptate rerum recusandae dicta dolor voluptatibus neque quis rem quasi nihil minima architecto modi fuga. Provident atque velit fuga.
      Neque ab quam magnam voluptatibus debitis. Id hic, quasi laudantium adipisci perspiciatis perferendis in sit minima provident ab, non at laboriosam. Laboriosam fuga quo atque veritatis possimus dolorum ut? Alias.</p>
      <button className="btn btn-primary" onClick={handleMode}>Dark Mode</button>
    </div>
  </div>
  )
}
