function createCar (manufacturer:string, model:string, ...
    properties:[string,any][]):any{
    const car:any = {
        manufacturer,
        model,
    };

for (const [key,value] of properties){
    car[key] = value;

}
return car;
    }

    const myCar = createCar('toyota','corola',['color','red'],
    ['optionalFeature', 'sunRoof']);
    console.log(myCar);