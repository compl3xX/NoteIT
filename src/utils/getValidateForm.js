const getValidateForm = ({ title, content }) => {


    if (title.length === 0 && content.length == 0) return 0;

    else if(title.length===0)return 1;

    else if(content.length===0)return 2;

    else return 3;


}

export default getValidateForm