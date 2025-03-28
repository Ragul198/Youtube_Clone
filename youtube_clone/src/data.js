export const API_KEY = "AIzaSyAlxKeeGd6MUFwyN6OB-RvXvDxogmlNU20";

export const view_convertor = (view) => {
  if(view >=1000000){
    return `${Math.floor((view/1000000))}M`
  }
  else if (view >=1000){
    return `${Math.floor((view/1000))}k`;
  }
}