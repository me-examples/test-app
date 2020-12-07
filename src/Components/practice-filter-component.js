import React, {useState} from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

const PracticeFilterComponent = ({setPracticeList}) => {
	const [currentSubject, setSubject] = useState();
	const subjects = [{
	  "value": "Integrated+Reasoning",
	  "label": "Integrated Reasoning"
	}, {
	  "value": "Math",
	  "label": "Math"
	}, {
	  "value": "Reading+Comprehension",
	  "label": "Reading Comprehension"
	}, {
	  "value": "Verbal",
	  "label": "Verbal"
	}];
	const chapters ={
  "Integrated+Reasoning": [{
    "value": "Graphics+Interpretation",
    "label": "Graphics Interpretation"
  }, {
    "value": "Multi-Source+Reasoning",
    "label": "Multi-Source Reasoning"
  }, {
    "value": "Other",
    "label": "Other"
  }, {
    "value": "Table+Analysis",
    "label": "Table Analysis"
  }, {
    "value": "Two-Part+Analysis",
    "label": "Two-Part Analysis"
  }],
  "Math": [{
    "value": "Algebra",
    "label": "Algebra"
  }, {
    "value": "Arithmetic+and+Fractions",
    "label": "Arithmetic and Fractions"
  }, {
    "value": "Coordinate+Plane",
    "label": "Coordinate Plane"
  }, {
    "value": "Counting",
    "label": "Counting"
  }, {
    "value": "Data+Sufficiency",
    "label": "Data Sufficiency"
  }, {
    "value": "Geometry",
    "label": "Geometry"
  }, {
    "value": "Integer+Properties",
    "label": "Integer Properties"
  }, {
    "value": "Percents+and+Ratios",
    "label": "Percents and Ratios"
  }, {
    "value": "Powers+and+Roots",
    "label": "Powers and Roots"
  }, {
    "value": "Probability",
    "label": "Probability"
  }, {
    "value": "Problem+Solving",
    "label": "Problem Solving"
  }, {
    "value": "Statistics",
    "label": "Statistics"
  }, {
    "value": "Word+Problems",
    "label": "Word Problems"
  }],
  "Reading+Comprehension": [{
    "value": "Long+Passages",
    "label": "Long Passages"
  }, {
    "value": "Short+Passages",
    "label": "Short Passages"
  }],
  "Verbal": [{
    "value": "Agreement",
    "label": "Agreement"
  }, {
    "value": "Agreement,+Diction",
    "label": "Agreement, Diction"
  }, {
    "value": "Assumption",
    "label": "Assumption"
  }, {
    "value": "Assumption,+Praxis+Reading+1+Question",
    "label": "Assumption, Praxis Reading 1 Question"
  }, {
    "value": "Conclusion",
    "label": "Conclusion"
  }, {
    "value": "Diction",
    "label": "Diction"
  }, {
    "value": "Evaluating",
    "label": "Evaluating"
  }, {
    "value": "Evaluating+the+Argument",
    "label": "Evaluating the Argument"
  }, {
    "value": "Evaluating,+Paragraph+Arguments",
    "label": "Evaluating, Paragraph Arguments"
  }, {
    "value": "Flawed+Argument",
    "label": "Flawed Argument"
  }, {
    "value": "Grammatical+Construction",
    "label": "Grammatical Construction"
  }, {
    "value": "Grammatical+Construction,+Diction",
    "label": "Grammatical Construction, Diction"
  }, {
    "value": "Idioms",
    "label": "Idioms"
  }, {
    "value": "Idioms,+Diction",
    "label": "Idioms, Diction"
  }, {
    "value": "Logical+Predication",
    "label": "Logical Predication"
  }, {
    "value": "Logical+Predication,+Diction",
    "label": "Logical Predication, Diction"
  }, {
    "value": "Long+Passages",
    "label": "Long Passages"
  }, {
    "value": "Medium+Passages",
    "label": "Medium Passages"
  }, {
    "value": "Other",
    "label": "Other"
  }, {
    "value": "Paradox",
    "label": "Paradox"
  }, {
    "value": "Paradox,+Paragraph+Arguments",
    "label": "Paradox, Paragraph Arguments"
  }, {
    "value": "Paragraph+Arguments",
    "label": "Paragraph Arguments"
  }, {
    "value": "Parallelism",
    "label": "Parallelism"
  }, {
    "value": "Parallelism,+Agreement,+Logical+Predication",
    "label": "Parallelism, Agreement, Logical Predication"
  }, {
    "value": "Parallelism,+Diction",
    "label": "Parallelism, Diction"
  }, {
    "value": "Rhetorical+Construction",
    "label": "Rhetorical Construction"
  }, {
    "value": "Short+Passages",
    "label": "Short Passages"
  }, {
    "value": "Strengthening",
    "label": "Strengthening"
  }, {
    "value": "Structure+(Arguments)",
    "label": "Structure (Arguments)"
  }, {
    "value": "Verb+Form",
    "label": "Verb Form"
  }, {
    "value": "Verb+Form,+Agreement",
    "label": "Verb Form, Agreement"
  }, {
    "value": "Verb+Form,+Agreement,+Rhetorical+Construction",
    "label": "Verb Form, Agreement, Rhetorical Construction"
  }, {
    "value": "Weakening",
    "label": "Weakening"
  }]
};
	const [currentChapter, setChapter] = useState();
  
  const sections = {
  "Integrated+Reasoning": {
    "Graphics+Interpretation": [{
      "value": "Integrated+Reasoning",
      "label": "Integrated Reasoning"
    }],
    "Multi-Source+Reasoning": [{
      "value": "Integrated+Reasoning",
      "label": "Integrated Reasoning"
    }],
    "Other": [{
      "value": "Integrated+Reasoning",
      "label": "Integrated Reasoning"
    }],
    "Table+Analysis": [{
      "value": "Integrated+Reasoning",
      "label": "Integrated Reasoning"
    }],
    "Two-Part+Analysis": [{
      "value": "Integrated+Reasoning",
      "label": "Integrated Reasoning"
    }]
  },
  "Math": {
    "Algebra": [{
      "value": "Data+Sufficiency",
      "label": "Data Sufficiency"
    }, {
      "value": "Problem+Solving",
      "label": "Problem Solving"
    }],
    "Arithmetic+and+Fractions": [{
      "value": "Data+Sufficiency",
      "label": "Data Sufficiency"
    }, {
      "value": "Problem+Solving",
      "label": "Problem Solving"
    }],
    "Coordinate+Plane": [{
      "value": "Data+Sufficiency",
      "label": "Data Sufficiency"
    }, {
      "value": "Problem+Solving",
      "label": "Problem Solving"
    }],
    "Counting": [{
      "value": "Data+Sufficiency",
      "label": "Data Sufficiency"
    }, {
      "value": "Problem+Solving",
      "label": "Problem Solving"
    }],
    "Data+Sufficiency": [{
      "value": "Hard",
      "label": "Hard"
    }],
    "Geometry": [{
      "value": "Data+Sufficiency",
      "label": "Data Sufficiency"
    }, {
      "value": "Problem+Solving",
      "label": "Problem Solving"
    }],
    "Integer+Properties": [{
      "value": "Data+Sufficiency",
      "label": "Data Sufficiency"
    }, {
      "value": "Problem+Solving",
      "label": "Problem Solving"
    }],
    "Percents+and+Ratios": [{
      "value": "Data+Sufficiency",
      "label": "Data Sufficiency"
    }, {
      "value": "Problem+Solving",
      "label": "Problem Solving"
    }],
    "Powers+and+Roots": [{
      "value": "Data+Sufficiency",
      "label": "Data Sufficiency"
    }, {
      "value": "Problem+Solving",
      "label": "Problem Solving"
    }],
    "Probability": [{
      "value": "Data+Sufficiency",
      "label": "Data Sufficiency"
    }, {
      "value": "Problem+Solving",
      "label": "Problem Solving"
    }],
    "Problem+Solving": [{
      "value": "Easy",
      "label": "Easy"
    }, {
      "value": "Hard",
      "label": "Hard"
    }, {
      "value": "Very+Hard",
      "label": "Very Hard"
    }],
    "Statistics": [{
      "value": "Data+Sufficiency",
      "label": "Data Sufficiency"
    }, {
      "value": "Problem+Solving",
      "label": "Problem Solving"
    }],
    "Word+Problems": [{
      "value": "Data+Sufficiency",
      "label": "Data Sufficiency"
    }, {
      "value": "Problem+Solving",
      "label": "Problem Solving"
    }]
  },
  "Reading+Comprehension": {
    "Long+Passages": [{
      "value": "Reading+Comprehension",
      "label": "Reading Comprehension"
    }],
    "Short+Passages": [{
      "value": "Reading+Comprehension",
      "label": "Reading Comprehension"
    }]
  },
  "Verbal": {
    "Agreement": [{
      "value": "Sentence+Correction",
      "label": "Sentence Correction"
    }],
    "Agreement,+Diction": [{
      "value": "Sentence+Correction",
      "label": "Sentence Correction"
    }],
    "Assumption": [{
      "value": "Critical+Reasoning",
      "label": "Critical Reasoning"
    }],
    "Assumption,+Praxis+Reading+1+Question": [{
      "value": "Critical+Reasoning",
      "label": "Critical Reasoning"
    }],
    "Conclusion": [{
      "value": "Inference",
      "label": "Inference"
    }],
    "Diction": [{
      "value": "Sentence+Correction",
      "label": "Sentence Correction"
    }],
    "Evaluating": [{
      "value": "Critical+Reasoning",
      "label": "Critical Reasoning"
    }],
    "Evaluating+the+Argument": [{
      "value": "Critical+Reasoning",
      "label": "Critical Reasoning"
    }],
    "Evaluating,+Paragraph+Arguments": [{
      "value": "Critical+Reasoning",
      "label": "Critical Reasoning"
    }],
    "Flawed+Argument": [{
      "value": "Critical+Reasoning",
      "label": "Critical Reasoning"
    }],
    "Grammatical+Construction": [{
      "value": "Sentence+Correction",
      "label": "Sentence Correction"
    }],
    "Grammatical+Construction,+Diction": [{
      "value": "Sentence+Correction",
      "label": "Sentence Correction"
    }],
    "Idioms": [{
      "value": "Sentence+Correction",
      "label": "Sentence Correction"
    }],
    "Idioms,+Diction": [{
      "value": "Sentence+Correction",
      "label": "Sentence Correction"
    }],
    "Logical+Predication": [{
      "value": "Sentence+Correction",
      "label": "Sentence Correction"
    }],
    "Logical+Predication,+Diction": [{
      "value": "Sentence+Correction",
      "label": "Sentence Correction"
    }],
    "Long+Passages": [{
      "value": "Reading+Comprehension",
      "label": "Reading Comprehension"
    }],
    "Medium+Passages": [{
      "value": "Reading+Comprehension",
      "label": "Reading Comprehension"
    }],
    "Other": [{
      "value": "Critical+Reasoning",
      "label": "Critical Reasoning"
    }, {
      "value": "Reading+Comprehension",
      "label": "Reading Comprehension"
    }, {
      "value": "Sentence+Correction",
      "label": "Sentence Correction"
    }],
    "Paradox": [{
      "value": "Critical+Reasoning",
      "label": "Critical Reasoning"
    }],
    "Paradox,+Paragraph+Arguments": [{
      "value": "Critical+Reasoning",
      "label": "Critical Reasoning"
    }],
    "Paragraph+Arguments": [{
      "value": "Critical+Reasoning",
      "label": "Critical Reasoning"
    }],
    "Parallelism": [{
      "value": "Sentence+Correction",
      "label": "Sentence Correction"
    }],
    "Parallelism,+Agreement,+Logical+Predication": [{
      "value": "Sentence+Correction",
      "label": "Sentence Correction"
    }],
    "Parallelism,+Diction": [{
      "value": "Sentence+Correction",
      "label": "Sentence Correction"
    }],
    "Rhetorical+Construction": [{
      "value": "Sentence+Correction",
      "label": "Sentence Correction"
    }],
    "Short+Passages": [{
      "value": "Reading+Comprehension",
      "label": "Reading Comprehension"
    }],
    "Strengthening": [{
      "value": "Critical+Reasoning",
      "label": "Critical Reasoning"
    }],
    "Structure+(Arguments)": [{
      "value": "Critical+Reasoning",
      "label": "Critical Reasoning"
    }],
    "Verb+Form": [{
      "value": "Sentence+Correction",
      "label": "Sentence Correction"
    }],
    "Verb+Form,+Agreement": [{
      "value": "Sentence+Correction",
      "label": "Sentence Correction"
    }],
    "Verb+Form,+Agreement,+Rhetorical+Construction": [{
      "value": "Sentence+Correction",
      "label": "Sentence Correction"
    }],
    "Weakening": [{
      "value": "Critical+Reasoning",
      "label": "Critical Reasoning"
    }]
  }
};
const [currentSection, setSection] = useState();

const difficulties = {
  "Integrated+Reasoning": {
    "Graphics+Interpretation": {
      "Integrated+Reasoning": [{
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Multi-Source+Reasoning": {
      "Integrated+Reasoning": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }]
    },
    "Other": {
      "Integrated+Reasoning": [{
        "value": "Hard",
        "label": "Hard"
      }]
    },
    "Table+Analysis": {
      "Integrated+Reasoning": [{
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }]
    },
    "Two-Part+Analysis": {
      "Integrated+Reasoning": [{
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    }
  },
  "Math": {
    "Algebra": {
      "Data+Sufficiency": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }],
      "Problem+Solving": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Arithmetic+and+Fractions": {
      "Data+Sufficiency": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }],
      "Problem+Solving": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Coordinate+Plane": {
      "Data+Sufficiency": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }],
      "Problem+Solving": [{
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Counting": {
      "Data+Sufficiency": [{
        "value": "Medium",
        "label": "Medium"
      }],
      "Problem+Solving": [{
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Data+Sufficiency": {
      "Hard": []
    },
    "Geometry": {
      "Data+Sufficiency": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }],
      "Problem+Solving": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Integer+Properties": {
      "Data+Sufficiency": [{
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }],
      "Problem+Solving": [{
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Percents+and+Ratios": {
      "Data+Sufficiency": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }],
      "Problem+Solving": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Powers+and+Roots": {
      "Data+Sufficiency": [{
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }],
      "Problem+Solving": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Probability": {
      "Data+Sufficiency": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }],
      "Problem+Solving": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Problem+Solving": {
      "Easy": [],
      "Hard": [],
      "Very+Hard": []
    },
    "Statistics": {
      "Data+Sufficiency": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }],
      "Problem+Solving": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Word+Problems": {
      "Data+Sufficiency": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }],
      "Problem+Solving": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    }
  },
  "Reading+Comprehension": {
    "Long+Passages": {
      "Reading+Comprehension": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }]
    },
    "Short+Passages": {
      "Reading+Comprehension": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    }
  },
  "Verbal": {
    "Agreement": {
      "Sentence+Correction": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }]
    },
    "Agreement,+Diction": {
      "Sentence+Correction": [{
        "value": "Medium",
        "label": "Medium"
      }]
    },
    "Assumption": {
      "Critical+Reasoning": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Assumption,+Praxis+Reading+1+Question": {
      "Critical+Reasoning": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Medium",
        "label": "Medium"
      }]
    },
    "Conclusion": {
      "Inference": [{
        "value": "Critical+Reasoning",
        "label": "Critical Reasoning"
      }]
    },
    "Diction": {
      "Sentence+Correction": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Evaluating": {
      "Critical+Reasoning": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Evaluating+the+Argument": {
      "Critical+Reasoning": [{
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Evaluating,+Paragraph+Arguments": {
      "Critical+Reasoning": [{
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Flawed+Argument": {
      "Critical+Reasoning": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Grammatical+Construction": {
      "Sentence+Correction": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Grammatical+Construction,+Diction": {
      "Sentence+Correction": [{
        "value": "Hard",
        "label": "Hard"
      }]
    },
    "Idioms": {
      "Sentence+Correction": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }]
    },
    "Idioms,+Diction": {
      "Sentence+Correction": [{
        "value": "Medium",
        "label": "Medium"
      }]
    },
    "Logical+Predication": {
      "Sentence+Correction": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Logical+Predication,+Diction": {
      "Sentence+Correction": [{
        "value": "Medium",
        "label": "Medium"
      }]
    },
    "Long+Passages": {
      "Reading+Comprehension": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Medium+Passages": {
      "Reading+Comprehension": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }]
    },
    "Other": {
      "Critical+Reasoning": [{
        "value": "Medium",
        "label": "Medium"
      }],
      "Reading+Comprehension": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }],
      "Sentence+Correction": [{
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Paradox": {
      "Critical+Reasoning": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Paradox,+Paragraph+Arguments": {
      "Critical+Reasoning": [{
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Paragraph+Arguments": {
      "Critical+Reasoning": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Parallelism": {
      "Sentence+Correction": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Parallelism,+Agreement,+Logical+Predication": {
      "Sentence+Correction": [{
        "value": "Medium",
        "label": "Medium"
      }]
    },
    "Parallelism,+Diction": {
      "Sentence+Correction": [{
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Rhetorical+Construction": {
      "Sentence+Correction": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Short+Passages": {
      "Reading+Comprehension": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Strengthening": {
      "Critical+Reasoning": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Structure+(Arguments)": {
      "Critical+Reasoning": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Verb+Form": {
      "Sentence+Correction": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    },
    "Verb+Form,+Agreement": {
      "Sentence+Correction": [{
        "value": "Hard",
        "label": "Hard"
      }]
    },
    "Verb+Form,+Agreement,+Rhetorical+Construction": {
      "Sentence+Correction": [{
        "value": "Hard",
        "label": "Hard"
      }]
    },
    "Weakening": {
      "Critical+Reasoning": [{
        "value": "Easy",
        "label": "Easy"
      }, {
        "value": "Hard",
        "label": "Hard"
      }, {
        "value": "Medium",
        "label": "Medium"
      }, {
        "value": "Very+Hard",
        "label": "Very Hard"
      }]
    }
  }
};
const getDifficultyOptions = () => {
  if (currentSubject && currentChapter && currentSection) {
    const defaultOption = [{value:"All", label: "All"}];
    const difficultyOptions = difficulties[currentSubject.value][currentChapter.value][currentSection.value];
    let allOptions = [];
    if(difficultyOptions.length) {
      allOptions = [...defaultOption, ...difficultyOptions];
    }
    return allOptions;
  }
  return [];
}
const [currentDifficulty, setDifficulty] = useState();
const [currentSearch, setCurrentSearch] = useState('');
const isDisabled = !((currentSubject && currentChapter && currentSection && currentDifficulty) || currentSearch.length);
	return (
		<div className="container-fluid">
		  <div className="well well-sm">
		  <div className="row">
		    <div className="col-sm-2">
			    <Select
		        value={currentSubject}
		        onChange={(option) => {
		        	setChapter(null);
		        	setSection(null);
		        	setDifficulty(null);
		        	setSubject(option);
		        }}
		        options={subjects}
		      />
	      </div>
	      <div className="col-sm-2">
		      <Select
		        value={currentChapter}
		        onChange={(option) => {
		        	setSection(null);
		        	setDifficulty(null);
		        	setChapter(option);
		        }}
		        options={currentSubject ? chapters[currentSubject.value] : []}
		      />
	      </div>
	      <div className="col-sm-2">
		      <Select
		        value={currentSection}
		        onChange={(option) => {
		        	setDifficulty(null);
		        	setSection(option);
		        }}
		        options={currentSubject && currentChapter ? sections[currentSubject.value][currentChapter.value] : []}
		      />
		    </div>
		    <div className="col-sm-2">
		      <Select
		        value={currentDifficulty}
		        onChange={(option) => {setDifficulty(option);}}
		        options={getDifficultyOptions()}
		      />
	      </div>
        <div className="col-sm-2">
          <input
            value={currentSearch}
            onChange={e => {
              const value = e.target.value;
              setCurrentSearch(value);
            }}
            type="text"
            className="form-control"
            placeholder="Search Anything"
          />
        </div>
        <div className="col-sm-2">
          <button
            onClick={(v) => {
              if (currentSearch) {
                 setPracticeList({path: '', level4: '', currentSearch});
              } else {
                const path = `Practice/${currentSubject.value}/${currentChapter.value}/${currentSection.value}/${currentDifficulty.value}`;
                const level4 = difficulties[currentSubject.value][currentChapter.value][currentSection.value]
                setPracticeList({path, level4, currentSearch: ''});
              }
            }}
            disabled={isDisabled}
            type="button"
            className="btn btn-primary">Filter</button>
        </div>
	      </div>
		  </div>
		</div>
	)
}
const mapDispatchToProps = dispatch => ({
 setPracticeList: (params) => {
 	dispatch({ type: 'SET_PRACTICE_PATH', params: params })}
})
export default connect(null, mapDispatchToProps)(PracticeFilterComponent);


