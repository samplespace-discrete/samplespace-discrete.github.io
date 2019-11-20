---
layout: default
title: SAMPLE SPACE
---

	**SAMPLE SPACE**
		**Definition**
		
			<p>In probability theory, the sample space (also called sample description space or possibility space) of an experiment or random trial is the set of all possible outcomes or results of that experiment. A sample space is usually denoted using set notation, and the possible ordered outcomes are listed as elements in the set. It is common to refer to a sample space by the labels S, Ω, or U (for "universal set").</p>
			<br>
			<p>For example, if the experiment is tossing a coin, the sample space is typically the set {head, tail}. For tossing two coins, the corresponding sample space would be {(head,head), (head,tail), (tail,head), (tail,tail)}, commonly written {HH, HT, TH, TT}. If the sample space is unordered, it becomes {[head,head], [head,tail], [tail,tail]}.</p>
			<br>
			<p>For tossing a single six-sided die, the typical sample space is {1, 2, 3, 4, 5, 6} (in which the result of interest is the number of pips facing up).</p>
			<br>
			<p>A well-defined sample space is one of three basic elements in a probabilistic model (a probability space); the other two are a well-defined set of possible events (a sigma-algebra) and a probability assigned to each event (a probability measure function).</p>
			
		
		**Conditions of a sample space**
		
			<p>A set **Ω**  with outcomes **_s_<sub>1</sub>, _s_<sub>2</sub>,...,_s_<sub>_n_</sub>** (i.e. **Ω = {}**_s_<sub>1</sub>, _s_<sub>2</sub>,...,_s_<sub>_n_</sub>**) must meet some conditions in order to be a sample space:</p>
			<br>
			* The outcomes must be **mutually exclusive**, i.e. if **_s_<sub>j</sub>** takes place, then no other **_s_<sub>i</sub>** will take place, ∀**_i_, _j_ = 1, 2,..., _n_ _i_ ≠ _j_**.
			* The outcomes must be **collectively exhaustive**, i.e., on every experiment (or random trial) there will always take place some outcome **_s_<sub>i</sub>** ∈ **Ω** for **i**  ∈ **{1, 2,..., n}**.
			* The sample space (**Ω**) must have the **right granularity** depending on what we are interested in. We must remove irrelevant information from the sample space. In other words, we must choose the right abstraction (forget some irrelevant information).
			<br>
			<p>For instance, in the trial of tossing a coin, we could have as a sample space **Ω<sub>1</sub> = {_H_, _T_}**, where **_H_** stands for _heads_ and **_T_** for _tails_. Another possible sample space could be **Ω<sub>2</sub> = {H&R, H&NR, T&R, T&NR}**. Here, **_R_** stands for _rains_ and **_NR_** _not rains_. Obviously, **Ω<sub>1</sub>** is a better choice than **Ω<sub>2</sub>** as we do not care about how the weather affects the tossing of a coin.</p>

		**Multiple sample spaces**
		
		<p>For many experiments, there may be more than one plausible sample space available, depending on what result is of interest to the experimenter. For example, when drawing a card from a standard deck of fifty-two playing cards, one possibility for the sample space could be the various ranks (Ace through King), while another could be the suits (clubs, diamonds, hearts, or spades).[3][6] A more complete description of outcomes, however, could specify both the denomination and the suit, and a sample space describing each individual card can be constructed as the Cartesian product of the two sample spaces noted above (this space would contain fifty-two equally likely outcomes). Still other sample spaces are possible, such as {right-side up, up-side down} if some cards have been flipped when shuffling.</p>
	
		**Equally likely outcomes**
	
		<p>Some treatments of probability assume that the various outcomes of an experiment are always defined so as to be equally likely.[7] However, there are experiments that are not easily described by a sample space of equally likely outcomes—for example, if one were to toss a thumb tack many times and observe whether it landed with its point upward or downward, there is no symmetry to suggest that the two outcomes should be equally likely.</p>
		<br>
		<p>Though most random phenomena do not have equally likely outcomes, it can be helpful to define a sample space in such a way that outcomes are at least approximately equally likely, since this condition significantly simplifies the computation of probabilities for events within the sample space. If each individual outcome occurs with the same probability, then the probability of any event becomes simply:[8]:346–347</p>
		<br>
		<p>{\displaystyle P(event)={\frac {\text{number of outcomes in event}}{\text{number of outcomes in sample space}}}}P(event)={\frac  {{\text{number of outcomes in event}}}{{\text{number of outcomes in sample space}}}}
		For example, if two dice are thrown to generate two uniformly distributed integers, D1 and D2, each in the range [1...6], the 36 ordered pairs (D1 , D2) constitute a sample space of equally likely events. In this case, the above formula applies, such that the probability of a certain sum, say D1 + D2 = 5 is easily shown to be 4/36, since 4 of the 36 outcomes produce 5 as a sum. On the other hand, the sample space of the 11 possible sums, {2, ...,12} are not equally likely outcomes, so the formula would give an incorrect result (1/11).</p>
		
		**Simple random sample**
		
		<p>In statistics, inferences are made about characteristics of a population by studying a sample of that population's individuals. In order to arrive at a sample that presents an unbiased estimate of the true characteristics of the population, statisticians often seek to study a simple random sample—that is, a sample in which every individual in the population is equally likely to be included.[8]:274–275 The result of this is that every possible combination of individuals who could be chosen for the sample is also equally likely (that is, the space of simple random samples of a given size from a given population is composed of equally likely outcomes).</p>
		
		<h2>Infinitely large sample spaces</h2>
		<p>In an elementary approach to probability, any subset of the sample space is usually called an event. However, this gives rise to problems when the sample space is continuous, so that a more precise definition of an event is necessary. Under this definition only measurable subsets of the sample space, constituting a σ-algebra over the sample space itself, are considered events.</p>

