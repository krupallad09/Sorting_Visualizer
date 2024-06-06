function Bubble()
{
    //Setting Time complexities
    document.getElementById("Time_Best").innerHTML="Ω(N)";
    document.getElementById("Time_Average").innerHTML="Θ(N<sup>2</sup>)";
    document.getElementById("Time_Worst").innerHTML="O(N<sup>2</sup>)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"#E2F4C5");//Color update //yellow

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "#A8CD9F");//Color update  //red
                div_update(divs[j+1],div_sizes[j+1], "#A8CD9F");//Color update //red

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "#A8CD9F");//Height update //red
                div_update(divs[j+1],div_sizes[j+1], "#A8CD9F");//Height update //red
            }
            div_update(divs[j],div_sizes[j], "#26355D");//Color update //blue
        }
        div_update(divs[j],div_sizes[j], "#3AA6B9");//Color update //green
    }
    div_update(divs[0],div_sizes[0], "#3AA6B9");//Color update //green

    enable_buttons();
}
