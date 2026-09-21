# Painted Cube Probability Challenge

Consider an $n\times n\times n$ cube made from unit cubes, with every outer face painted. A unit cube is selected at random and rolled. What is the probability that a painted face lands uppermost?

| Painted faces | Number of unit cubes | Probability of painted face uppermost | Contribution |
| --- | ---: | ---: | ---: |
| 3 | $8$ | $\frac{1}{2}$ | $4$ |
| 2 | $12(n-2)$ | $\frac{1}{3}$ | $4(n-2)$ |
| 1 | $6(n-2)^2$ | $\frac{1}{6}$ | $(n-2)^2$ |
| 0 | $(n-2)^3$ | $0$ | $0$ |

There are $n^3$ unit cubes in total, so:

$$P(\text{painted face up})=\frac{4+4(n-2)+(n-2)^2}{n^3}=\frac{n^2}{n^3}=\frac{1}{n}$$

This assumes each face of a selected unit cube is equally likely to land uppermost.
