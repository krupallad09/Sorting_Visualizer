function Insertion()
{
    //Setting Time complexities
    document.getElementById("Time_Best").innerHTML="Ω(N)";
    document.getElementById("Time_Worst").innerHTML="O(N<sup>2</sup)";
    document.getElementById("Time_Average").innerHTML="Θ(N<sup>2</sup>)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"#E2F4C5");//Color update

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"#A8CD9F");//Color update
            div_update(divs[i+1],div_sizes[i+1],"#A8CD9F");//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"#A8CD9F");//Height update
            div_update(divs[i+1],div_sizes[i+1],"#A8CD9F");//Height update
    
            div_update(divs[i],div_sizes[i],"#26355D");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"#E2F4C5");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"#26355D");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"#3AA6B9");//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"#3AA6B9");//Color update

    enable_buttons();
}
