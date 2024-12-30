import SectionHeading from './sectionHeading';
import MenuCard from '../shares/MenuCard';
import useMenu from '../hooks/useMenu';

const Popular = () => {
 
    // custom hook diye kora
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    // ata emni proceess 

    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItem = data.filter(item => item.category === 'popular');
    //         setMenu(popularItem)
    //     })
    // },[]);



    return (
        <div className='w-11/12 mx-auto mb-10'>
            <SectionHeading
                subHeading={"From Our Menu"}
                heading={"Popular Items"}
            >
           </SectionHeading>
           <div className='grid grid-cols-1 mt-10 md:grid-cols-2 gap-8'>
            {
                popular.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
            }
           </div>
<div className='flex justify-center mt-5'>
<button className='btn btn-outline  border-0 mt-4 border-b-4'>View full Menu</button>
</div>
        </div>
    );
};

export default Popular;