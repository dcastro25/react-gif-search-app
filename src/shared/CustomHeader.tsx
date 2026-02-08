interface Props{
    Title: string,
    Description? : string
}
const CustomHeader = ({Title, Description}: Props) => {
    return (

        <div className = "content-center">
            <h1>{Title}</h1>
            <p>{Description}</p>
        </div>    

    );
};

export default CustomHeader
