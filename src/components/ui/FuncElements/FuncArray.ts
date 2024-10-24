import Automation from '../../../assets/extensionsAssets/Automation.svg';
import FullControll from '../../../assets/extensionsAssets/FullControll.svg';
import MakeProfite from '../../../assets/extensionsAssets/MakeProfite.svg';
import Support from '../../../assets/extensionsAssets/Support.svg';
interface Item {
	image: string;
	title: string;
    text: string;
}

export const Elements: Item[] = [
    {
        image: Automation,
        title: "extensions.Automation",
        text: "extensions.Automation_info"
    },
    {
        image: FullControll,
        title: "extensions.Full_control",
        text: "extensions.Full_control_info"
    },
    {
        image: MakeProfite,
        title: "extensions.Make_a_profit",
        text: "extensions.Make_a_profit_info"
    },
    {
        image: Support,
        title: "extensions.Support",
        text: "extensions.Support_info"
    }
]