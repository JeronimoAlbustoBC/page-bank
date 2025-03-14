import { Receipt } from "./svgs/Receipt";
import { Cycle } from "./svgs/Cycle";
import { Widgets } from "./svgs/Widgets";
import { Person } from "./svgs/Person";
import { Apartment } from "./svgs/Apartment";
import { Store } from "./svgs/Store";
import { LocalShipping } from "./svgs/LocalShipping";
import { WhiteLogo } from "./svgs/WhiteLogo";
import { RepairKit } from "./svgs/RepairKit";
import { Devices } from "./svgs/Devices";
import { ExportNodes } from "./svgs/ExportNodes";
import { AddCard } from "./svgs/AddCard";
import { Signature } from "./svgs/Signature";
import { CreditCard } from "./svgs/CreditCard";
import { Checklist } from "./svgs/Checklist";
import { Snapshot } from "./svgs/Snapshot";
import { Download } from "./svgs/Download";
import { Payments } from "./svgs/Payments";
import { Task } from "./svgs/Task";
import { CreditScore } from "./svgs/CreditScore";
import { AssuredWorkload } from "./svgs/AssuredWorkload";
import { Hub } from "./svgs/Hub";
import { Boat } from "./svgs/Boat";
import { Bulb } from "./svgs/Bulb";
import { TrendingUp } from "./svgs/TrendingUp";
import { Stethoscope } from "./svgs/Stethoscope";
import { CobranzasYPagos } from "./svgs/CobranzasYPagos";
import { BilleteraVirtual } from "./svgs/BilleteraVirtual";
import { InfoDeCuenta } from "./svgs/InfoDeCuenta";
import { HeapSnapshot } from "./svgs/HeapSnapshop";
import { TaskAlt } from "./svgs/TaskAlt";
import { GreenCircle } from "./svgs/GreenCircle";
import { ContainedArrow } from "./svgs/ContainedArrow";
import { DottedCircle } from "./svgs/DottedCircle";
import { Wallet } from "./svgs/Wallet";
import { BarChart } from "./svgs/BarChart";
import { HandShake } from "./svgs/HandShake";
import { BareHandShake } from "./svgs/BareHandShake";
import { TrendUpChart } from "./svgs/TrendUpChart";
import { BlueCircle } from "./svgs/BlueCircle";
import { Sell } from "./svgs/Sell";
import { Barchart4 } from "./svgs/BarChart4";
import { BarChart2 } from "./svgs/BarChart2";
import { BuyCar } from "./svgs/BuyCar";
import { Enterprise } from "./svgs/Enterprise";
import { Storefront } from "./svgs/Storefront";
import { NetworkNode } from "./svgs/NetworkNode";
import { Workspaces } from "./svgs/Workspaces";
import { Computer } from "./svgs/Computer";
import { ShoppingBasket } from "./svgs/ShoppingBasket";

export const getIcon = (iconName: string, props?: any) => {
  switch (iconName) {
    case "Widgets":
      return <Widgets {...props} />;
    case "Cycle":
      return <Cycle {...props} />;
    case "Receipt":
      return <Receipt {...props} />;
    case "Person":
      return <Person {...props} />;
    case "Apartment":
      return <Apartment {...props} />;
    case "Store":
      return <Store {...props} />;
    case "LocalShipping":
      return <LocalShipping {...props} />;
    case "WhiteLogo":
      return <WhiteLogo {...props} />;
    case "RepairKit":
      return <RepairKit {...props} />;
    case "Devices":
      return <Devices {...props} />;
    case "ExportNodes":
      return <ExportNodes {...props} />;
    case "AddCard":
      return <AddCard {...props} />;
    case "Signature":
      return <Signature {...props} />;
    case "CreditCard":
      return <CreditCard {...props} />;
    case "Checklist":
      return <Checklist {...props} />;
    case "Snapshot":
      return <Snapshot {...props} />;
    case "Download":
      return <Download {...props} />;
    case "Payments":
      return <Payments {...props} />;
    case "Task":
      return <Task {...props} />;
    case "CreditScore":
      return <CreditScore {...props} />;
    case "AssuredWorkload":
      return <AssuredWorkload {...props} />;
    case "Hub":
      return <Hub {...props} />;
    case "Boat":
      return <Boat {...props} />;
    case "Bulb":
      return <Bulb {...props} />;
    case "TrendingUp":
      return <TrendingUp {...props} />;
    case "Stethoscope":
      return <Stethoscope {...props} />;
    case "CobranzasYPagos":
      return <CobranzasYPagos {...props} />;
    case "BilleteraVirtual":
      return <BilleteraVirtual {...props} />;
    case "InfoDeCuenta":
      return <InfoDeCuenta {...props} />;
    case "HeapSnapshot":
      return <HeapSnapshot {...props} />;
    case "TaskAlt":
      return <TaskAlt {...props} />;
    case "GreenCircle":
      return <GreenCircle {...props} />;
    case "BlueCircle":
      return <BlueCircle {...props} />;
    case "ContainedArrow":
      return <ContainedArrow {...props} />;
    case "DottedCircle":
      return <DottedCircle {...props} />;
    case "Wallet":
      return <Wallet {...props} />;
    case "BarChart":
      return <BarChart {...props} />;
    case "HandShake":
      return <HandShake {...props} />;
    case "TrendUpChart":
      return <TrendUpChart {...props} />;
    case "Sell":
      return <Sell {...props} />;
    case "BarChart4":
      return <Barchart4 {...props} />;
    case "BarChart2":
      return <BarChart2 {...props} />;
    case "BuyCar":
      return <BuyCar {...props} />;
    case "Enterprise":
      return <Enterprise {...props} />;
    case "Storefront":
      return <Storefront {...props} />;
    case "NetworkNode":
      return <NetworkNode {...props} />;
    case "Workspaces":
      return <Workspaces {...props} />;
    case "Computer":
      return <Computer {...props} />;
    case "ShoppingBasket":
      return <ShoppingBasket {...props} />;
    case "BareHandShake":
      return <BareHandShake {...props} />;
    default:
      break;
  }
};
