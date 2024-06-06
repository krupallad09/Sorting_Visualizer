function SelectionSort()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerHTML="O(N<sup>2</sup>)";
    document.getElementById("Time_Average").innerHTML="Θ(N<sup>2</sup>)";
    document.getElementById("Time_Best").innerHTML="Ω(N<sup>2</sup>)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"#A8CD9F");//Color update

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"#E2F4C5");//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"#26355D");//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"#A8CD9F");//Color update
            }
            else
            {
                div_update(divs[j],div_sizes[j],"#26355D");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"#A8CD9F");//Height update
            div_update(divs[i],div_sizes[i],"#A8CD9F");//Height update
            div_update(divs[index_min],div_sizes[index_min],"#26355D");//Color update
        }
        div_update(divs[i],div_sizes[i],"#3AA6B9");//Color update
    }
    div_update(divs[i],div_sizes[i],"#3AA6B9");//Color update

    enable_buttons();
}