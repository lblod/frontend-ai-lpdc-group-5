import { Namespace } from 'rdflib';

export { FORM, RDF, XSD, SHACL } from '@lblod/submission-form-helpers';

export const DBPEDIA = new Namespace('http://dbpedia.org/ontology/');
export const LBLOD_SUBSIDIE = new Namespace(
  'http://lblod.data.gift/vocabularies/subsidie/'
);
export const MU = new Namespace('http://mu.semte.ch/vocabularies/core/');
export const QB = new Namespace('http://purl.org/linked-data/cube#');
export const EXT = new Namespace('http://mu.semte.ch/vocabularies/ext/');
export const PROV = new Namespace('http://www.w3.org/ns/prov#');
