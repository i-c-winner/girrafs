export default function percent(number){
    switch (number/4) {
        case 1:
            return'100%';
        case .75:
            return '75%';
        case .5:
            return '50%';
        case .25:
            return '25%'
        case 0:
            return '0%'           
    }
}