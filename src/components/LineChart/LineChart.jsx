import { LineChart as LChart , Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentMarksData = [
        { id: 1, name: "Alice", math: 85, physics: 78, chemistry: 82 },
        { id: 2, name: "Bob", math: 78, physics: 74, chemistry: 80 },
        { id: 3, name: "Charlie", math: 92, physics: 88, chemistry: 90 },
        { id: 4, name: "David", math: 67, physics: 72, chemistry: 65 },
        { id: 5, name: "Ella", math: 74, physics: 79, chemistry: 76 },
        { id: 6, name: "Frank", math: 88, physics: 85, chemistry: 84 },
        { id: 7, name: "Grace", math: 95, physics: 92, chemistry: 91 },
        { id: 8, name: "Henry", math: 69, physics: 70, chemistry: 75 },
        { id: 9, name: "Ivy", math: 80, physics: 83, chemistry: 79 },
        { id: 10, name: "Jack", math: 76, physics: 77, chemistry: 73 }
      ];
      



    return (
        <div>
            <LChart width={700} height={400} data={studentMarksData} >

            <XAxis dataKey="name" />
            <YAxis/>

           <Line type="monotone" dataKey='physics' stroke="blue" ></Line>
           <Line type="monotone" dataKey='math' stroke="red" ></Line>
           <Line type="monotone" dataKey='chemistry' stroke="green" ></Line>

            </LChart>
            
        </div>
    );
};

export default LineChart;