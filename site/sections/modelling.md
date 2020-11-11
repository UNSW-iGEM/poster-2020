---
tags: section
row: 5
section-title: MODELLING
images:
  - 'modeller_dimer-0 Transparent.png'
---

## Structural 
<br><br>
We utilised fold recognition template modelling with the i-TASSER server to impose a reasonable 3D structure onto a sequence of peptides. Unfortunately, scientific literature could only say generally that heat shock proteins form dimers and then large oligomers but not tell us whether they are <b>functional</b> as a dimer or an oligomer. This was the central question we wanted to ask. After docking a HSP22E and HSP22F together to form a heterodimer, we conducted de novo loop remodelling to remove atom clashes from our dimer model. This was assessed for convergence on a structure (Figure 1) and a 12-unit oligomer was constructed from these dimers (Figure 2). In Phase I, foundational structural models were created for further molecular dynamics to better understand the functional qualities of algae heat shock proteins.<br><br>

<img src="/assets/Protein Friend Animation.gif">

**Figure 1:** The HSP22E/F dimer was simulated for 275ns to observe the changes in conformation of the protein. Simulation was done with gromacs with the CHARMM27 force field. The monomers in the dimer didn’t float away from each and for the radius of gyration decreased and appeared to stabilise which gave us greater confidence that this might be how these dimers dock together.<br><br>

<img src="/assets/12mer_colourful_low.gif">

**Figure 2:**  12-unit oligomer model created with another eukaryotic heat shock protein complex as a template. Dimers were aligned in pymol against the template. After refinement and removal of overlaps, this model would be the basis for an oligomer model of the HSP22 complex.<br><br>


## Mathematical
<br><br>
Heat shock responses are ubiquitous in living organisms as all environments have temperature fluctuations and a need to mitigate oxidative stress. Mathematical models of the new engineered system were compared to a model of the wild type system to predict the biochemical changes on the level of the cell. The comparison between the 2 models were aimed at analyzing the effectiveness of our proposed engineering solution in a quantitative measure. We consulted Mark Tanaka, who helped us understand the difference between stochastic and deterministic versions of these models, we ultimately implemented stochastic models using the PySB library.  The plot of various substrate levels in a wild type Symbiodinium model(Figure 3) and in our engineered Symbiodinium model(Figure 4) at an elevated temperature is compared.<br><br>

<img src="/assets/Baseline_model_TEMP1.png">

**Figure 3:** The Natural Protein level plummeted in our simulation time frame of a 100 seconds, with noticeable ROS level surge<br><br>.

<img src="/assets/AddOn_model_TEMP1.png">

**Figure 4:** The Natural Protein level is maintained at a relatively healthy level, even as the ROS concentration is suppressed heavily by rapid glutathione production.<br><br>

From the graph we can see that by introducing sHSP and Glutathione the level of Natural Proteins is conserved at a relatively stable range.
