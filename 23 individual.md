TP= (2,12)
start = (0,8)

$$y=a(x-2)^2 + 12\newline{}8=a(0-2)^2+12\newline{}-4=a(0-2)^2\newline{}-4=a \times{} (-2)^2\newline{}-4=a\times{}4\newline{}a=-1$$
$$h=-1(t-2)^2+12$$

$$11=-1(t-2)^2+12\newline{}-1=-1(t-2)^2\newline{}1=(t-2)^2\newline{}t-2=\sqrt{1}\newline{}t =\sqrt{1}=1\quad{}\text{(or }\sqrt{1}-1\text{, except }t\ge{}0\text{)}\newline{}\therefore{}\text{when}\ h=11, t=1$$
```tikz
\usetikzlibrary{backgrounds}

\begin{document}
	% x=1.6cm and y=0.8cm scales a 6x12 mathematical window into a perfect 1:1 visual square
	\begin{tikzpicture}[
		x=1.6cm, y=0.8cm,
		background rectangle/.style={fill=white}, 
		show background rectangle
	]
		% Margins inside the white box so labels do not get clipped
		\path (-0.8,-1.2) rectangle (6.8,13.2);

		% 1. Clean background grid restricted to 0<=t<=6 and 0<=h<=12
		\draw[very thin, color=black] (0,0) grid (6,12);
		
		% 2. Main Axis lines
		\draw[->, thick] (-0.2,0) -- (6.5,0) node[right] {$t$};
		\draw[->, thick] (0,-0.2) -- (0,12.5) node[above] {$h$};
		
		% 3. Automated Tick Marks & Numbers
		\foreach \t in {1,2,3,4,5,6}
			\draw (\t,0.1) -- (\t,-0.1) node[below, font=\tiny\sffamily] {\t};
		\foreach \h in {2,4,6,8,10,12}
			\draw (0.05,\h) -- (-0.05,\h) node[left, font=\tiny\sffamily] {\h};
		\node[below left, font=\tiny\sffamily] at (0,0) {0};

		% 4. Plot the curve across the requested domain 0 to 6
		% Note: It cuts off at t=5.46 when h drops below 0
		\draw[color=blue, ultra thick, domain=0:5.464, samples=100] 
			plot (\x, {-1*(\x - 2)^2 + 12});
			
		% 5. Key points
		\fill[red] (2,12) circle (2pt) node[above, color=black, font=\footnotesize\sffamily] {Vertex $(2,12)$};
		\fill[red] (5.464,0) circle (2pt) node[above right, color=black, font=\tiny\sffamily] {$t \approx 5.46$};
		
	\end{tikzpicture}
\end{document}

```
