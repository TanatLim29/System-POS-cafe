import { Button, Card, CardContent } from "@mui/joy";

export default function ControlCard({ title }) {
    // เขียนแบบ Arrow Function
    const startProgram = ()=>{
        window.alert('Start ' + title);
    }
    const restartProgram = (data)=>{
        window.alert(data + title);
    }
    const shutDownProgram = (data)=>{
        window.alert(data + title);
    }

    const showData = () => { 
        return (
            <div>
                <li> Hello </li>
                <li> world </li>
            </div>
        )
    }
    return (
        <div className="flex-col space-y-4 z-10  w-full">
         <Card className='m-4 rounded-md border absolute inset-0 '>
            <CardContent>
              <h4>{title}</h4>
                <div className='flex gap-2'>
                    <Button onClick={() => startProgram()}>Start</Button>
                    <Button color='success' onClick={() => restartProgram("Restart ")}>
                        Restart
                    </Button>
                    <Button color='danger' onClick={() => shutDownProgram("Shutdown ")}>Down</Button>
                </div>
               {showData()}
            </CardContent>
        </Card>
        </div>
    )
}