import { FC } from 'react';
import { AvatarData } from '../../../types/types';

import './AvatarGenerate.scss';

const AvatarBuild: FC<AvatarData> = (props) => {
	const { body, hair, eyes, nose, mouth, hat, glasses, shirt, special } = props;

	return (
		<div className="avatar__build">
			<h3 className="avatar__build-title">Body</h3>
			<div className="avatar__build-wrap">
				{body &&
					body?.components.map((item, idx) => (
						<img src={item.url} key={idx} alt="test" style={{ zIndex: item.layer }} />
					))}
				{hair &&
					hair?.components.map((item, idx) => (
						<img src={item.url} key={idx} alt="test" style={{ zIndex: item.layer }} />
					))}
				{eyes &&
					eyes?.components.map((item, idx) => (
						<img src={item.url} key={idx} alt="test" style={{ zIndex: item.layer }} />
					))}
				{nose &&
					nose?.components.map((item, idx) => (
						<img src={item.url} key={idx} alt="test" style={{ zIndex: item.layer }} />
					))}
				{mouth &&
					mouth?.components.map((item, idx) => (
						<img src={item.url} key={idx} alt="test" style={{ zIndex: item.layer }} />
					))}
				{hat &&
					hat?.components.map((item, idx) => (
						<img src={item.url} key={idx} alt="test" style={{ zIndex: item.layer }} />
					))}
				{glasses &&
					glasses?.components.map((item, idx) => (
						<img src={item.url} key={idx} alt="test" style={{ zIndex: item.layer }} />
					))}
				{shirt &&
					shirt?.components.map((item, idx) => (
						<img src={item.url} key={idx} alt="test" style={{ zIndex: item.layer }} />
					))}
				{special &&
					special?.components.map((item, idx) => (
						<img src={item.url} key={idx} alt="test" style={{ zIndex: item.layer }} />
					))}
			</div>
		</div>
	);
};

export default AvatarBuild;
