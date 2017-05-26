import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

class Algorithm extends Component {
  constructor(props){
    super(props);
    // Set the number of rows for each of the following
  }
  render() {
      const codeString = `class Knaptest{
      public static void main(String [] args){
        int [] val =  {60,100,120,150};
        int [] wt = {10,20,30,40};
        int w = 50;
        System.out.println(practice(w,wt,val,val.length) );

      }

      public static int dynamicknap(int W, int wt[], int val[], int n){
        // Intialize our counters
        int i,w = 0;
        // Initialize our 2 dimensional knapsack array.
        int knap[][] = new int[n+1][W+1];

        // Begin iterating through the 2 dimensional knapsack array.
        for( i = 0; i <= n; i++)
        {
          for( w = 0; w <= W; w++ )
          {
            if( i == 0 || w == 0)
            {
              // First row or column always return 0
              knap[i][w] = 0;
            } else if ( wt[i-1] <= w ){
              // This is where we compare the to the row above or (the row above and a few steps back)
              knap[i][w] = max( val[i-1] + knap[i-1][w-wt[i - 1]], knap[i-1][w]  );
            } else {
              // the current weight is larger than our max weight.
              knap[i][w] = knap[i-1][w];
            }
          }
        }
        // we return our solution
        return knap[n][W];
      }

      public static int max(int a, int b){
        return (a > b) ? a : b;
      }
    }
    `;

    return (
      <SyntaxHighlighter language='java' style={docco}>{codeString}</SyntaxHighlighter>
    );
  }

}

export default Algorithm;
